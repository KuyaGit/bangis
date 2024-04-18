import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveLabresultComponent } from './archive-labresult.component';

describe('ArchiveLabresultComponent', () => {
  let component: ArchiveLabresultComponent;
  let fixture: ComponentFixture<ArchiveLabresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchiveLabresultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchiveLabresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
