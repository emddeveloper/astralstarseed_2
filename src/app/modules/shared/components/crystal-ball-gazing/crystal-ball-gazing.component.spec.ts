import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrystalBallGazingComponent } from './crystal-ball-gazing.component';

describe('CrystalBallGazingComponent', () => {
  let component: CrystalBallGazingComponent;
  let fixture: ComponentFixture<CrystalBallGazingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrystalBallGazingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrystalBallGazingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
