import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router) { }

  private saveSecurityKey(securityKey: string): void {
    localStorage.setItem('securityKey', securityKey);
  }

  private saveUsername(username: string): void {
    localStorage.setItem('username', username);
  }

  public login(username: string): void {
    const securityKey = '1234567890';
    this.saveSecurityKey(securityKey);
    this.saveUsername(username);
  }

  public getUsername(): string {
    return localStorage.getItem('username');
  }

  public logout(): void {
    localStorage.removeItem('securityKey');
    localStorage.removeItem('username');
    this.router.navigateByUrl('/login');
  }

  public validateSecurityKey(): boolean {
    const securityKey = localStorage.getItem('securityKey');
    if (securityKey) {
      return true;
    } else {
      return false;
    }
  }

}
