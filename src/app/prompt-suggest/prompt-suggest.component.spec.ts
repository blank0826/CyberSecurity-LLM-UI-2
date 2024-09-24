import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptSuggestComponent } from './prompt-suggest.component';

describe('PromptSuggestComponent', () => {
  let component: PromptSuggestComponent;
  let fixture: ComponentFixture<PromptSuggestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromptSuggestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromptSuggestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
