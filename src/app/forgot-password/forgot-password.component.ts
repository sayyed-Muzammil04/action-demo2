import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string;

  constructor() {
    this.email = '';
  }

  resetPassword(): void {
    // Perform password reset logic
    console.log('Password reset requested for email:', this.email);
    // Additional code for password reset
  }
}
