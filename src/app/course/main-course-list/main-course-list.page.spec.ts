import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCourseListPage } from './main-course-list.page';

describe('MainCourseListPage', () => {
  let component: MainCourseListPage;
  let fixture: ComponentFixture<MainCourseListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCourseListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCourseListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
