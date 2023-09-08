import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;

  form!: FormGroup;
  usernameControl!: FormControl;
  passwordControl!: FormControl;

  constructor(  private _fb: FormBuilder, private _loginSvc: LoginService, private router: Router) { 
 this.createForm()
  }

  public createForm(){
    this.form = this._fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
    this.usernameControl = this.form.get('username') as FormControl;
    this.passwordControl = this.form.get('password') as FormControl;
  }

  public login(){
    if(this._loginSvc.login(this.form.value)) {
      this.router.navigate(['/dashboard']);
    };
  }
}
