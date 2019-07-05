import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterCourseListPage } from './starter-course-list.page';

describe('StarterCourseListPage', () => {
  let component: StarterCourseListPage;
  let fixture: ComponentFixture<StarterCourseListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterCourseListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterCourseListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
