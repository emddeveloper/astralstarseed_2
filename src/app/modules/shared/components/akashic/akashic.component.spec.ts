import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkashicComponent } from './akashic.component';

describe('AkashicComponent', () => {
  let component: AkashicComponent;
  let fixture: ComponentFixture<AkashicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AkashicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AkashicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
