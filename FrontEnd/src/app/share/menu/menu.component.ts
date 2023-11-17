import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  user: User | undefined;

  constructor(private authService: AuthService) { }

  // ngOnInit() {
  //   this.authService.getUser().subscribe(user => {
  //     this.user = user;
  //   });
  // }

  logout() {
    this.authService.doLogout();
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
}