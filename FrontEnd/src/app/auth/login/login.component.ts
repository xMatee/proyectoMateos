import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../interfaces/user';
import { Route, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder, private validationService: ValidationService) { }

  public error: boolean = false;


  public myForm: FormGroup = this.formBuilder.group({
    email: ["", [Validators.required, Validators.pattern(this.validationService.getEmailPattern())]],
    contrasena: ["", [Validators.required, Validators.minLength(6)]]
  });

  onSubmit() {
    this.myForm.markAllAsTouched();
    if (this.myForm.invalid) {
      this.error = true;
      return;
    }

    this.error = false;

    this.authService.doLogin(this.myForm.value.email, this.myForm.value.contrasena)
      .subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (error: any) => {
          console.error("Error capturado: ", error.message);
          this.error = true;
        }
      });
    return;
  }
}