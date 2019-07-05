import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterCourseFormPage } from './starter-course-form.page';

describe('StarterCourseFormPage', () => {
  let component: StarterCourseFormPage;
  let fixture: ComponentFixture<StarterCourseFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterCourseFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterCourseFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
