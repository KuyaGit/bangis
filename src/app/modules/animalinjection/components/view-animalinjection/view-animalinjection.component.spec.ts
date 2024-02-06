import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAnimalinjectionComponent } from './view-animalinjection.component';

describe('ViewAnimalinjectionComponent', () => {
  let component: ViewAnimalinjectionComponent;
  let fixture: ComponentFixture<ViewAnimalinjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAnimalinjectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAnimalinjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
