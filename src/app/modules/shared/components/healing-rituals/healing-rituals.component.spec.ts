import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealingRitualsComponent } from './healing-rituals.component';

describe('HealingRitualsComponent', () => {
  let component: HealingRitualsComponent;
  let fixture: ComponentFixture<HealingRitualsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealingRitualsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HealingRitualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
