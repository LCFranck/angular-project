import { Injectable } from '@angular/core';
import { Craft } from '../models/types';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CraftsService {
  url = environment.apiUrl + '/crafts';

  async getAllCrafts(): Promise<Craft[]> {
    const response = await fetch(this.url);
    return (await response.json()) ?? [];
  }

  async getCraftById(id: number): Promise<Craft | undefined> {
    const response = await fetch(`${this.url}?id=${id}`);
    const data = await response.json();
    return data[0];
  }
}
