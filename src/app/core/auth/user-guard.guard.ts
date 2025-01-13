import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = this.userService.isLoggedIn();
    const role = this.userService.getUserRole();

    if (isLoggedIn && role === 'user') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
