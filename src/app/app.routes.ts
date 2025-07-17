import { Routes } from '@angular/router';

// Import your standalone components
import { Login} from './auth/login/login';
import { Trending} from './movies/trending/trending';
import { Search } from './movies/search/search';
import { Favorites } from './movies/favorites/favorites';


export const routes: Routes = [
  { path: '', redirectTo: '/trending', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'trending', component: Trending },
  { path: 'search', component: Search },
  { path: 'favorites', component: Favorites },
  { path: '**', redirectTo: '/trending' }  // fallback for unknown routes
];
