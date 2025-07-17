import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  get isLoggedIn() {
    return !!localStorage.getItem('loggedInUser');
  }

  logout() {
    localStorage.removeItem('loggedInUser');
  }
}
