import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of, switchMap, tap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class ValidationService {

    private baseUrl = environment.apiURL;

    constructor(private authService: AuthService, private http: HttpClient) { }

    private emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

    isInvalidField(myform: FormGroup, field: string) {
        return myform.controls[field].errors && myform.controls[field].touched
    }

    getEmailPattern() {
        return this.emailPattern
    }
    public emailAlreadyInUseAsync = (control: FormControl): Observable<boolean> => {
        return this.http.post<boolean>(`${this.baseUrl}/usuarios/email`, { email: control.value })
            .pipe(
                map((response: boolean) => {
                    return response;
                }),
                catchError((error: any) => {
                    console.log("Hubo un error");
                    console.error(error.message);
                    return throwError(() => error.message);
                })
            );
    }
}