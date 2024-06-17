import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureAnalysisComponent } from './signature-analysis.component';

describe('SignatureAnalysisComponent', () => {
  let component: SignatureAnalysisComponent;
  let fixture: ComponentFixture<SignatureAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignatureAnalysisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignatureAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
