import { Component, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../interfaces/user';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input()
  usuario: User = {
    email: '',
    name: '',
    password: '',
    id: 0
  }

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.doLogin(this.usuario.email, this.usuario.password)
      .subscribe(user => {
        this.router.navigate(['/']);
      });
  }
}