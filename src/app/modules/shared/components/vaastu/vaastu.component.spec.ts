import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaastuComponent } from './vaastu.component';

describe('VaastuComponent', () => {
  let component: VaastuComponent;
  let fixture: ComponentFixture<VaastuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VaastuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VaastuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
