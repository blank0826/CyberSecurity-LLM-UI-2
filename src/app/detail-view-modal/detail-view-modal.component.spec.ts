import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailViewModalComponent } from './detail-view-modal.component';

describe('DetailViewModalComponent', () => {
  let component: DetailViewModalComponent;
  let fixture: ComponentFixture<DetailViewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailViewModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
