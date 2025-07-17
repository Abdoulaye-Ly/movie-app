import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export class Register {
  username = '';
  password = '';

  constructor(private router: Router) {}

  register() {
    if (!this.username.trim() || !this.password.trim()) {
      alert('Please enter a username and password.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    if (users.find((u: any) => u.username === this.username)) {
      alert('Username already exists!');
      return;
    }

    users.push({ username: this.username, password: this.password });
    localStorage.setItem('users', JSON.stringify(users));

    // Fake JWT token
    const fakeToken = btoa(`${this.username}:fake-jwt`);
    localStorage.setItem('jwt', fakeToken);

    this.router.navigate(['/']);
  }
}
