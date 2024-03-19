import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit { 
  loginForm: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      console.log('Form submitted successfully');
      console.log('Email:', this.loginForm.value.email);
      console.log('Password:', this.loginForm.value.password);
    } else {
      console.log('Form has validation errors');
    }
      
    this.resetFrom()
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

  }

  resetFrom() {
    this.loginForm.reset()
    let control: AbstractControl;

    Object.keys(this.loginForm.controls).forEach((name) => {
      control = this.loginForm.controls[name];
      control.setErrors(null);
    });
  }

}
