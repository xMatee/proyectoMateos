import { Component, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../interfaces/user';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router) { }

  @Input()
  usuario: User = {
    email: '',
    name: '',
    password: '',
    id: 0
  }
  onSubmit() {
    this.authService.doRegister(this.usuario.email, this.usuario.password, this.usuario.name)
      .subscribe(user => {
        this.router.navigate(['/']);
      });
  }
}
