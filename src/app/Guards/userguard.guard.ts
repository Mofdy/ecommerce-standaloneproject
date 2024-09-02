import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../Services/user-auth.service';
import { inject } from '@angular/core';

export const userguardGuard: CanActivateFn = (route, state) => {
  const userAuth=inject(UserAuthService);
  const router=inject(Router);

  if(userAuth.getUserLogged){
    return true;
  }
  else{
    alert("Please login first")
    router.navigate(['/UserLogin']);
    return false;
  }
};
