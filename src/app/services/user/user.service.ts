import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router) { }

  public saveSecurityKey(securityKey: string) {
    localStorage.setItem('securityKey', securityKey);
  }

  public saveUsername(username: string) {
    localStorage.setItem('username', username);
  }

  public login(username: string) {
    const securityKey = '1234567890';
    this.saveSecurityKey(securityKey);
    this.saveUsername(username);
  }

  public getUsername() {
    return localStorage.getItem('username');
  }

  public logout() {
    localStorage.removeItem('securityKey');
    localStorage.removeItem('username');
    this.router.navigateByUrl('/login');
  }

  public validateSecurityKey() {
    const securityKey = localStorage.getItem('securityKey');
    if (securityKey) {
      return true;
    } else {
      return false;
    }
  }

}
