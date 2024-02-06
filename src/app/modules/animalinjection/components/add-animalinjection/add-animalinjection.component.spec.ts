import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnimalinjectionComponent } from './add-animalinjection.component';

describe('AddAnimalinjectionComponent', () => {
  let component: AddAnimalinjectionComponent;
  let fixture: ComponentFixture<AddAnimalinjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAnimalinjectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAnimalinjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
