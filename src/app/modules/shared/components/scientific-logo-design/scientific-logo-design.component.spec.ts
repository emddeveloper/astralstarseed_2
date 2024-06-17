import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientificLogoDesignComponent } from './scientific-logo-design.component';

describe('ScientificLogoDesignComponent', () => {
  let component: ScientificLogoDesignComponent;
  let fixture: ComponentFixture<ScientificLogoDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScientificLogoDesignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScientificLogoDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
