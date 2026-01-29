import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CraftsService } from '../services/crafts.service';
import { Craft } from '../models/types';

@Component({
  selector: 'app-crafts-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './crafts-gallery.component.html',
  styleUrl: './crafts-gallery.component.css'
})
export class CraftsGalleryComponent implements OnInit {
  crafts: Craft[] = [];

  constructor(private craftsService: CraftsService) {}

  async ngOnInit() {
    this.crafts = await this.craftsService.getAllCrafts();
  }
}

