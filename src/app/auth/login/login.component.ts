import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // HTML Info
  public title: string = 'Login';
  public userTitle: string = 'Username';
  public userError: string = 'Username is required';
  public passwordTitle: string = 'Password';
  public passwordError: string = 'Password is required';
  public loginButton: string = 'Login';
  // HTML Info

  public username: string = '';

  // Login form
  public loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private userSvc: UserService, private router: Router) { }

  ngOnInit(): void {
    this.validateSession();
  }

  // Login function
  public login(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.userSvc.login(this.loginForm.value.username);
    this.router.navigateByUrl('airportsList');
  }

  // Validate session
  public validateSession(): void {
    if (this.userSvc.validateSecurityKey()) {
      this.router.navigateByUrl('airportsList');
    }
  }

}
