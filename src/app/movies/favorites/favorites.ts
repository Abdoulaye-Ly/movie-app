import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './favorites.html',
  styleUrls: ['./favorites.scss'],
})
export class Favorites implements OnInit {
  favorites: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.loadFavorites();
  }

  loadFavorites() {
    this.favorites = this.movieService.getFavorites();
  }

  removeFromFavorites(movie: any) {
    this.movieService.removeFromFavorites(movie.id);
    this.loadFavorites(); // refresh list
  }
}
