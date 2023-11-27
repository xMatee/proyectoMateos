import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../interfaces/user';
import { Observable, map } from 'rxjs';

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

  isLoggedIn(): Observable<boolean> {
    return this.authService.isActive().pipe(map(isActive => !!isActive));
  }

  isActive(route: string): boolean {
    return window.location.href.endsWith(route);
  }
}

