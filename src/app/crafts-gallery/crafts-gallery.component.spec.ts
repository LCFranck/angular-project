import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftsGalleryComponent } from './crafts-gallery.component';

describe('CraftsGalleryComponent', () => {
  let component: CraftsGalleryComponent;
  let fixture: ComponentFixture<CraftsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CraftsGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CraftsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
