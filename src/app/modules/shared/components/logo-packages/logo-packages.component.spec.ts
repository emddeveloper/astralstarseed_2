import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoPackagesComponent } from './logo-packages.component';

describe('LogoPackagesComponent', () => {
  let component: LogoPackagesComponent;
  let fixture: ComponentFixture<LogoPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoPackagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
