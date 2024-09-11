import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanTopicsModalComponent } from './ban-topics-modal.component';

describe('BanTopicsModalComponent', () => {
  let component: BanTopicsModalComponent;
  let fixture: ComponentFixture<BanTopicsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BanTopicsModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BanTopicsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
