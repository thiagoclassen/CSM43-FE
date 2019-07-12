import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteCourseFormPage } from './complete-course-form.page';

describe('CompleteCourseFormPage', () => {
  let component: CompleteCourseFormPage;
  let fixture: ComponentFixture<CompleteCourseFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteCourseFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteCourseFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
