import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityMetricsComponent } from './security-metrics.component';

describe('SecurityMetricsComponent', () => {
  let component: SecurityMetricsComponent;
  let fixture: ComponentFixture<SecurityMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecurityMetricsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecurityMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
