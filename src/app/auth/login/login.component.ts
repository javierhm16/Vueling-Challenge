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

  public username: string = '';

  public loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private userSvc: UserService, private router: Router) { }

  ngOnInit(): void {
    if(this.userSvc.validateSecurityKey()) {
      this.router.navigateByUrl('/');
    }
  }

  public login(): void {
    if(this.loginForm.invalid) {
      return;
    }
    this.userSvc.login(this.loginForm.value.username);
    this.router.navigateByUrl('/');
  }

}
