import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCourseViewPage } from './main-course-view.page';

describe('MainCourseViewPage', () => {
  let component: MainCourseViewPage;
  let fixture: ComponentFixture<MainCourseViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCourseViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCourseViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
