import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTextComponent } from './project-text.component';

describe('ProjectTextComponent', () => {
  let component: ProjectTextComponent;
  let fixture: ComponentFixture<ProjectTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
