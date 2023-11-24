import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of, switchMap, tap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';


@Injectable({
    providedIn: 'root'
})

export class ValidationService {

    constructor(private authService: AuthService) { }

    private emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

    isInvalidField(myform: FormGroup, field: string) {
        return myform.controls[field].errors && myform.controls[field].touched
    }

    getEmailPattern() {
        return this.emailPattern
    }
    /*   public emailAlreadyInUseAsync = (control: FormControl): Observable<ValidationErrors | null> => {
           if (this.authService.isEmailInUse(control.value).pipe(delay(1000))) {
               return of({
                   emailAlreadyInUse: true
               });
           }
           else {
               return of(null);
           }
       }*/
}