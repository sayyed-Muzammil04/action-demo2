import { Component } from '@angular/core';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent {
  firstName: string;
  lastName: string;
  email: string;

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
