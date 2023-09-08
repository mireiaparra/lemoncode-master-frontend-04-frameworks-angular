import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private _router: Router) {}

  public login(user: { username: string; password: string }): boolean {
    if (
      user.username === 'master@lemoncode.net' &&
      user.password === '12345678'
    ) {
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    } else return false;
  }

  public logout(): void {
    localStorage.removeItem('user');
    this._router.navigate(['/login']);
  }

  public isLogged(): boolean {
    if (localStorage.getItem('user')) {
      return true;
    } else {
      return false;
    }
  }

  public getUsername(): string | undefined {
    if (localStorage.getItem('user')) {
      const userData = JSON.parse(localStorage.getItem('user')!);
      return userData.username;
    } else {
      return undefined;
    }
  }
}
