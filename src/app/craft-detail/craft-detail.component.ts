import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { CraftsService } from '../services/crafts.service';
import { Craft } from '../models/types';

@Component({
  selector: 'app-craft-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './craft-detail.component.html',
  styleUrl: './craft-detail.component.css'
})
export class CraftDetailComponent implements OnInit {
  craft?: Craft;

  constructor(
    private route: ActivatedRoute,
    private craftsService: CraftsService
  ) {}

  async ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.craft = await this.craftsService.getCraftById(id);
  }
}
