import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAnimalInjectionComponent } from './table-animal-injection.component';

describe('TableAnimalInjectionComponent', () => {
  let component: TableAnimalInjectionComponent;
  let fixture: ComponentFixture<TableAnimalInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableAnimalInjectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableAnimalInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
