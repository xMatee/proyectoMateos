import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../interfaces/user';
import { Route, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder, private validationService: ValidationService) { }

  public error: boolean = false;
  public errorMessage: string = "";
  public diffPass: boolean = false;

  public myForm: FormGroup = this.formBuilder.group({
    nombre: ["", [Validators.required, Validators.minLength(3)]],
    email: ["", [Validators.required, Validators.pattern(this.validationService.getEmailPattern())]],
    contrasena: ["", [Validators.required, Validators.minLength(6)]],
    contrasena2: ["", [Validators.required, Validators.minLength(6)]]
  });

  onSubmit() {
    this.myForm.markAllAsTouched();
    if (this.myForm.invalid) {
      this.error = true;
      this.errorMessage = "Uno o más campos son inválidos";
      return;
    }
    if (this.myForm.value.contrasena2 !== this.myForm.value.contrasena) {
      this.diffPass = true;
      console.log(this.myForm.value.contrasena2, this.myForm.value.contrasena)
      console.log("Las contrasenas no coinciden");
      return;
    }

    this.authService.doRegister(this.myForm.value.email, this.myForm.value.contrasena, this.myForm.value.nombre)
      .subscribe({
        next: (user) => {
          this.router.navigate(['/login']);
        },
        error: (error: any) => {
          console.error("Error capturado: ", error.message);
        }
      });
    this.error = false;
    this.diffPass = false;
  }
}
