import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveAvacListComponent } from './archive-avac-list.component';

describe('ArchiveAvacListComponent', () => {
  let component: ArchiveAvacListComponent;
  let fixture: ComponentFixture<ArchiveAvacListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchiveAvacListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchiveAvacListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
