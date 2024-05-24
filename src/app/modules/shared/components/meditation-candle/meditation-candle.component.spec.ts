import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditationCandleComponent } from './meditation-candle.component';

describe('MeditationCandleComponent', () => {
  let component: MeditationCandleComponent;
  let fixture: ComponentFixture<MeditationCandleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeditationCandleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeditationCandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
