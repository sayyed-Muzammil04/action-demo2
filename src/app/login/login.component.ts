import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;
  errorMessage: string;

  constructor() {
    this.username = '';
    this.password = '';
    this.errorMessage = '';
  }

  login(): void {
    if (this.username === 'admin' && this.password === 'password') {
      // Login successful
      this.errorMessage = '';
      // Redirect or perform any other actions
    } else {
      // Login failed
      this.errorMessage = 'Invalid username or password.';
    }
  }
}
