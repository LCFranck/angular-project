import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftDetailComponent } from './craft-detail.component';

describe('CraftDetailComponent', () => {
  let component: CraftDetailComponent;
  let fixture: ComponentFixture<CraftDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CraftDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CraftDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
