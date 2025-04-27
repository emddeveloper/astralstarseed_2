import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChakraHhealingBalancingComponent } from './chakra-hhealing-balancing.component';

describe('ChakraHhealingBalancingComponent', () => {
  let component: ChakraHhealingBalancingComponent;
  let fixture: ComponentFixture<ChakraHhealingBalancingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChakraHhealingBalancingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChakraHhealingBalancingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
