import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ ReactiveFormsModule ]
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

  it('should have a valid loginForm initially', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('should have email and password controls', () => {
    expect(component.loginForm.contains('email')).toBeTruthy();
    expect(component.loginForm.contains('password')).toBeTruthy();
  });

  it('should mark email control as invalid if empty', () => {
    const emailControl = component.loginForm.get('email');
    expect(emailControl?.valid).toBeFalsy();
  });

  it('should mark email control as valid if input is valid email', () => {
    const emailControl = component.loginForm.get('email');
    emailControl?.setValue('test@example.com');
    expect(emailControl?.valid).toBeTruthy();
  });

  it('should mark password control as valid if input is valid', () => {
    const passwordControl = component.loginForm.get('password');
    passwordControl?.setValue('ValidPassword123');
    expect(passwordControl?.valid).toBeTruthy();
  });

  it('should log form values when login() is called and form is valid', () => {
    spyOn(console, 'log'); // Spy on console.log

    const email = 'test@example.com';
    const password = 'ValidPassword123';
    
    component.loginForm.patchValue({
      email: email,
      password: password
    });

    component.login();
    
    expect(console.log).toHaveBeenCalledWith('Form submitted successfully');
    expect(console.log).toHaveBeenCalledWith('Email:', email);
    expect(console.log).toHaveBeenCalledWith('Password:', password);
  });

  it('should reset form when resetForm() is called', () => {
    const email = 'test@example.com';
    const password = 'ValidPassword123';
    
    component.loginForm.patchValue({
      email: email,
      password: password
    });

    component.resetFrom();
    
    expect(component.loginForm.value).toEqual({
      email: null,
      password: null
    });
  });


});
