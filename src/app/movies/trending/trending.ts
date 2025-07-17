import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.html',
  styleUrl: './trending.scss',
  imports: [CommonModule, MatCardModule, MatButtonModule]
})
export class Trending implements OnInit {
  trendingMovies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getTrendingMovies().subscribe((data: any) => {
      this.trendingMovies = data.results;
    });
  }

  addToFavorites(movie: any) {
  this.movieService.addToFavorites(movie);
  }

  removeFromFavorites(movie: any) {
    this.movieService.removeFromFavorites(movie.id);
  }

}

