import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAnimalinjectionComponent } from './edit-animalinjection.component';

describe('EditAnimalinjectionComponent', () => {
  let component: EditAnimalinjectionComponent;
  let fixture: ComponentFixture<EditAnimalinjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAnimalinjectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditAnimalinjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
