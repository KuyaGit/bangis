import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddanimalbiteComponent } from './addanimalbite.component';

describe('AddanimalbiteComponent', () => {
  let component: AddanimalbiteComponent;
  let fixture: ComponentFixture<AddanimalbiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddanimalbiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddanimalbiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
