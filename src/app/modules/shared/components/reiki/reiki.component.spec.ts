import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReikiComponent } from './reiki.component';

describe('ReikiComponent', () => {
  let component: ReikiComponent;
  let fixture: ComponentFixture<ReikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReikiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
