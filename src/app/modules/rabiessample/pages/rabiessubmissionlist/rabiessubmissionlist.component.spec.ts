import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RabiessubmissionlistComponent } from './rabiessubmissionlist.component';

describe('RabiessubmissionlistComponent', () => {
  let component: RabiessubmissionlistComponent;
  let fixture: ComponentFixture<RabiessubmissionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RabiessubmissionlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RabiessubmissionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
