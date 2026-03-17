import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',  // makes it available app-wide
})
export class MovieService {
  private apiKey = 'e9d74247a9e5f6a39df65504a339cfe5';
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getTrendingMovies() {
    return this.http.get(`${this.baseUrl}/trending/movie/week?api_key=${this.apiKey}`);
  }

  searchMovies(query: string) {
    return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${query}`);
  }

  getMovieDetails(id: number) {
    return this.http.get(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }

  addToFavorites(movie: any) {
    let favorites = this.getFavorites();
    if (!favorites.find((m: any) => m.id === movie.id)) {
      favorites.push(movie);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }

  removeFromFavorites(movieId: number) {
    let favorites = this.getFavorites();
    favorites = favorites.filter((m: any) => m.id !== movieId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  getFavorites(): any[] {
    const data = localStorage.getItem('favorites');
    return data ? JSON.parse(data) : [];
  }
}


