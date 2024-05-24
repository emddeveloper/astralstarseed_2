import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchwordsComponent } from './switchwords.component';

describe('SwitchwordsComponent', () => {
  let component: SwitchwordsComponent;
  let fixture: ComponentFixture<SwitchwordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchwordsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchwordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
