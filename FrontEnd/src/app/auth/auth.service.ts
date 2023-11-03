import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USER_KEY = "user";
  private user?: User = undefined
  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  private saveUserToLocalStorage(user: User) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user))
  }
  // doLogin(email: string, password: string): boolean {
  //   //TODO Hacer un POST al backend con email y password
  //   const usuarioObtenidoDelBackend = {
  //     id: 1,
  //     password: "pepe",
  //     email: "pepe@gmail.com"
  //   }
  //   this.saveUserToLocalStorage(usuarioObtenidoDelBackend)
  //   return true
  // }
  doRegister(name: string, email: string, password: string): Observable<User> {

    const newUser: User = {
      id: 2, // Supongamos que el nuevo usuario tiene un ID diferente.
      name: name,
      email: email,
      password: password
    };
    this.saveUserToLocalStorage(newUser);

    return of(newUser);
  }

  doLogin(email: string, pasword: string): Observable<User> {
    const usuarioObtenidoDelBackend = {
      id: 1,
      name: '',
      password: "pepe",
      email: "pepe@gmail.com"
    }
    this.saveUserToLocalStorage(usuarioObtenidoDelBackend)
    return of(usuarioObtenidoDelBackend)
  }

  doLogout() {
    localStorage.clear();
    this.user = undefined
    this.route.navigate(['/']);

  }
  isActive(): Observable<Boolean> {
    if (!localStorage.getItem(this.USER_KEY)) {
      this.user = undefined
      return of(false)
    }
    return of(true)
  }

  getUser() {
    return structuredClone(this.user)
  }
}
