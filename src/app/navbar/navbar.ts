import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common'
<<<<<<< HEAD
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

=======
>>>>>>> 574326a158e4cee6ff6a88414abb271dca93d37f

@Component({
  selector: 'app-navbar',
  standalone: true,
<<<<<<< HEAD
  imports: [
    RouterModule, 
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
=======
  imports: [RouterModule, CommonModule],
>>>>>>> 574326a158e4cee6ff6a88414abb271dca93d37f
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class Navbar {
  constructor(private router: Router) {}

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('jwt');
  }

  logout() {
    localStorage.removeItem('jwt');
    this.router.navigate(['/']);
  }
}
<<<<<<< HEAD



=======
>>>>>>> 574326a158e4cee6ff6a88414abb271dca93d37f
