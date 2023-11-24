import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, switchMap, tap, throwError } from 'rxjs';
import { TokenAndIdResponse, User, UserAndToken } from '../../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USER_KEY = environment.USER_KEY;
  private baseUrl = environment.apiURL;
  private userAndToken?: UserAndToken = undefined;
  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  private saveUserToLocalStorage(
    user: UserAndToken) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    this.userAndToken = user;
  }
  doRegister(email: string, contrasena: string, nombre: string): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/usuarios`, { nombre, email, contrasena }).pipe(
      catchError((error: any) => {
        console.log("Hubo un error");
        console.error(error.message);
        return throwError(() => error.message);
      })
    )
  }

  doLogin(email: string, password: string): Observable<User> {
    return this.http.post<TokenAndIdResponse>(`${this.baseUrl}/usuarios/login`, { email, contrasena: password })
      .pipe(
        tap(response => console.log("token", response.token)),
        switchMap((response: any) => {
          const token = response.token;
          const user_id = response.user_id;
          return this.http.get<User>(`${this.baseUrl}/usuarios/${user_id}`, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }).pipe(
            tap(user =>
              this.saveUserToLocalStorage({ user, token })),
            catchError((error: any) => {
              console.log("Hubo un error");
              console.error(error.message);
              return throwError(() => error.message);
            })
          );
        }),
      );
  }

  doLogout() {
    if (!localStorage.getItem(this.USER_KEY)) {
      this.userAndToken = undefined
      console.log("No hay usuario logueado")
      return;
    }
    return this.http.put(`${this.baseUrl}/usuarios/logout/`, {}).pipe(
      tap((message: any) => {
        localStorage.clear();
        this.userAndToken = undefined
        this.route.navigate(['${this.baseUrl}/usuarios/login/']);
        console.log(message);
      }),
      catchError((error: any) => {
        console.error(error.message);
        return throwError(() => error.message);
      })
    )
  }

  isActive(): Observable<Boolean> {
    if (!localStorage.getItem(this.USER_KEY)) {
      this.userAndToken = undefined
      return of(false)
    }
    return of(true)
  }

  getUser() {
    return structuredClone(this.userAndToken?.user)
  }

  checkAuthentication(): Observable<boolean> {
    if (!localStorage.getItem(this.USER_KEY)) {
      this.userAndToken = undefined
      return of(false)
    }

    this.userAndToken = JSON.parse(localStorage.getItem(this.USER_KEY)!);

    return this.http.get<User>(`${this.baseUrl}/usuarios/${this.userAndToken?.user.id}/`, {
      headers: {
        'Authorization': `Bearer ${this.userAndToken?.token}`
      }
    }).pipe(
      tap(user => this.userAndToken!.user = user),
      map((user) => !!user),
      catchError(() => of(false))
    );
  }
}
