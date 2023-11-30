import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)
  const isAuth = authService.isActive()
  if (!isAuth) {
    router.navigate(['']);
  }
  return isAuth;
};
