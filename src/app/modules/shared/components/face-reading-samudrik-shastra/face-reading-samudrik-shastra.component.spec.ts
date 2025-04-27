import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceReadingSamudrikShastraComponent } from './face-reading-samudrik-shastra.component';

describe('FaceReadingSamudrikShastraComponent', () => {
  let component: FaceReadingSamudrikShastraComponent;
  let fixture: ComponentFixture<FaceReadingSamudrikShastraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaceReadingSamudrikShastraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaceReadingSamudrikShastraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
