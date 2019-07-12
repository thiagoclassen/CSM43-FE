import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteCourseListPage } from './complete-course-list.page';

describe('CompleteCourseListPage', () => {
  let component: CompleteCourseListPage;
  let fixture: ComponentFixture<CompleteCourseListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteCourseListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteCourseListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
