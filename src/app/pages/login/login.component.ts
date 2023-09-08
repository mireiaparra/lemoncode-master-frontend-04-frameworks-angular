import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor(  private _fb: FormBuilder,) { 
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

  }
}
