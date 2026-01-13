import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CraftDetailComponent } from './craft-detail/craft-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details', component: CraftDetailComponent }
 
];
