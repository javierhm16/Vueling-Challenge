import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router) { }

  // Save security key and username in local storage
  private saveSecurityKey(securityKey: string): void {
    localStorage.setItem('securityKey', securityKey);
  }
  
  private saveUsername(username: string): void {
    localStorage.setItem('username', username);
  }
  // Save security key and username in local storage

  // Create and save security key and username in local storage
  public login(username: string): void {
    const securityKey = '1234567890';
    this.saveSecurityKey(securityKey);
    this.saveUsername(username);
  }

  // Get username from local storage
  public getUsername(): string {
    return localStorage.getItem('username');
  }

  // Delete security key and username from local storage and redirect to login page
  public logout(): void {
    localStorage.removeItem('securityKey');
    localStorage.removeItem('username');
    this.router.navigateByUrl('login');
  }

  // Validate security key in local storage
  public validateSecurityKey(): boolean {
    const securityKey = localStorage.getItem('securityKey');
    if (securityKey) {
      return true;
    } else {
      return false;
    }
  }

}
