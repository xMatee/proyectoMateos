import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuardGuard: CanActivateChildFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)
  const isAuth = authService.isActive()
  if (!isAuth) {
    router.navigate(['']);
  }
  return isAuth;
};
