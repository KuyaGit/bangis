import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewanimalbiteComponent } from './viewanimalbite.component';

describe('ViewanimalbiteComponent', () => {
  let component: ViewanimalbiteComponent;
  let fixture: ComponentFixture<ViewanimalbiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewanimalbiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewanimalbiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
