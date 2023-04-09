import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { UserService } from 'src/app/services/user/user.service';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [LoginComponent],
      providers: [
        UserService,
        FormBuilder
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    const title = fixture.nativeElement.querySelector('h1');
    expect(title.textContent).toEqual('Login');
  });

  it('should have a form', () => {
    const form = fixture.nativeElement.querySelector('form');
    expect(form).toBeTruthy();
  });

  it('should have a username field', () => {
    const username = fixture.nativeElement.querySelector('input[name="username"]');
    expect(username).toBeTruthy();
  });

  it('should have a password field', () => {
    const password = fixture.nativeElement.querySelector('input[name="password"]');
    expect(password).toBeTruthy();
  });

  it('should have a submit button', () => {
    const submit = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(submit).toBeTruthy();
  });
});
