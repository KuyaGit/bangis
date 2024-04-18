import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedRabiesSubmissionComponent } from './archived-rabies-submission.component';

describe('ArchivedRabiesSubmissionComponent', () => {
  let component: ArchivedRabiesSubmissionComponent;
  let fixture: ComponentFixture<ArchivedRabiesSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchivedRabiesSubmissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchivedRabiesSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
