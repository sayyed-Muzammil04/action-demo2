import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgotPasswordComponent } from './forgot-password.component';
import { FormsModule } from '@angular/forms';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[FormsModule],


      declarations: [ForgotPasswordComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have an empty initial value for email', () => {
    expect(component.email).toBe('');
  });

  it('should call resetPassword method on button click', () => {
    spyOn(component, 'resetPassword');
    const buttonElement = fixture.nativeElement.querySelector('button');
    buttonElement.click();
    expect(component.resetPassword).toHaveBeenCalled();
  });

  it('should log the email when resetPassword is called', () => {
    component.email = 'test@example.com';
    spyOn(console, 'log');
    component.resetPassword();
    expect(console.log).toHaveBeenCalledWith('Password reset requested for email:', 'test@example.com');
  });
});
