import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalmistryComponent } from './palmistry.component';

describe('PalmistryComponent', () => {
  let component: PalmistryComponent;
  let fixture: ComponentFixture<PalmistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PalmistryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PalmistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
