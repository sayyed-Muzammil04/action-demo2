import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({

      imports:[FormsModule],
      declarations: [LoginComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeFalsy();
  });

  it('should create the component',()=>{
    expect(component).toBeTruthy();
  });

  it('should have empty username and password initially', () => {
    expect(component.username).toBe('');
    expect(component.password).toBe('');
  });

  it('should display error message on invalid login', () => {
    component.username = 'admin';
    component.password = 'wrongpassword';
    component.login();
    fixture.detectChanges();
    const errorMessage = fixture.nativeElement.querySelector('.error');
    expect(errorMessage).not.toBeNull(); 
    expect(errorMessage?.textContent).toContain('Invalid username or password.');
  });

  it('should clear error message on successful login', () => {
    component.username = 'admin';
    component.password = 'password';
    component.login();
    fixture.detectChanges();
    const errorMessage = fixture.nativeElement.querySelector('.error');
    expect(errorMessage).toBeNull(); // Check if the element is null
  });

  
  // it('should clear error message on successful login', () => {
  //   component.username = 'admin';
  //   component.password = 'password';
  //   component.login();
  //   fixture.detectChanges();
  //   const errorMessage = fixture.nativeElement.querySelector('.error');
  //   expect(errorMessage).not.toBeNull(); // Check if the element exists
  //   expect(errorMessage?.textContent).toBe('');
  // });
});