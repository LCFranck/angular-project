import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CraftDetailComponent } from './craft-detail/craft-detail.component';
import { CraftsGalleryComponent } from './crafts-gallery/crafts-gallery.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'crafts', component: CraftsGalleryComponent },
  { path: 'crafts/:id', component: CraftDetailComponent }
];

