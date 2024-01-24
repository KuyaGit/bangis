import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditanimalbiteComponent } from './editanimalbite.component';

describe('EditanimalbiteComponent', () => {
  let component: EditanimalbiteComponent;
  let fixture: ComponentFixture<EditanimalbiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditanimalbiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditanimalbiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
