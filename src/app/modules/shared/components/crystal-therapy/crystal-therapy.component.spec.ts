import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrystalTherapyComponent } from './crystal-therapy.component';

describe('CrystalTherapyComponent', () => {
  let component: CrystalTherapyComponent;
  let fixture: ComponentFixture<CrystalTherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrystalTherapyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrystalTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
