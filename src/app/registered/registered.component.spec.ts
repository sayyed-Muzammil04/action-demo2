import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisteredComponent } from './registered.component';
import { FormsModule } from '@angular/forms';

describe('RegisteredComponent', () => {
  let component: RegisteredComponent;
  let fixture: ComponentFixture<RegisteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [RegisteredComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty initial values for firstName, lastName, and email', () => {
    expect(component.firstName).toBe('');
    expect(component.lastName).toBe('');
    expect(component.email).toBe('');
  });


  it('should display Full Name Correctly', () =>{
    component.firstName = 'Sayyed';
    component.lastName = 'Muzammil';
    fixture.detectChanges();
    const fullName = fixture.nativeElement.querySelector('strong');
    expect(fullName.textContent).toBe('Sayyed Muzammil');
  })

  it('should update firstName when input value changes', () => {
    const firstNameInput = fixture.nativeElement.querySelector('#firstName');
    firstNameInput.value = 'Jane';
    firstNameInput.dispatchEvent(new Event('input'));
    expect(component.firstName).toBe('Jane');
  });

  it('should update lastName when input value changes', () => {
    const lastNameInput = fixture.nativeElement.querySelector('#lastName');
    lastNameInput.value = 'Smith';
    lastNameInput.dispatchEvent(new Event('input'));
    expect(component.lastName).toBe('Smith');
  });

  it('should update email when input value changes', () => {
    const emailInput = fixture.nativeElement.querySelector('#email');
    emailInput.value = 'test@example.com';
    emailInput.dispatchEvent(new Event('input'));
    expect(component.email).toBe('test@example.com');
  });
});