import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabExperienceComponent } from './tab-experience.component';

describe('TabExperienceComponent', () => {
  let component: TabExperienceComponent;
  let fixture: ComponentFixture<TabExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
