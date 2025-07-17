import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './search.html',
  styleUrls: ['./search.scss']
})
export class Search {
  query = '';
  results: any[] = [];

  constructor(private movieService: MovieService) {}

  searchMovies() {
    if (!this.query.trim()) {
      this.results = [];
      return;
    }

    this.movieService.searchMovies(this.query).subscribe((data: any) => {
      this.results = data.results;
    });
  }

  addToFavorites(movie: any) {
    console.log('Add to favorites:', movie.title);
  }
}
