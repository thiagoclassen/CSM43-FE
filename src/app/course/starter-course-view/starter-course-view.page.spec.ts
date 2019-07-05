import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterCourseViewPage } from './starter-course-view.page';

describe('StarterCourseViewPage', () => {
  let component: StarterCourseViewPage;
  let fixture: ComponentFixture<StarterCourseViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterCourseViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterCourseViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
