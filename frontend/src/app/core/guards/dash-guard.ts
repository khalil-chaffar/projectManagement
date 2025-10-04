import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Authentication } from '../auth/authentication';


export const dashGuard: CanActivateFn = (route, state) => {
  const _auth = inject(Authentication);
  const _router = inject(Router);
  if(_auth.isLoggedIn() == true){
    return true;
  }else{
    _router.navigate(['/login']);
    return false;
  }
};
