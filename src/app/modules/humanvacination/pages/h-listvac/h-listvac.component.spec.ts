import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HListvacComponent } from './h-listvac.component';

describe('HListvacComponent', () => {
  let component: HListvacComponent;
  let fixture: ComponentFixture<HListvacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HListvacComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HListvacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
