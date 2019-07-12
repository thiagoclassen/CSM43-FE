import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteCourseViewPage } from './complete-course-view.page';

describe('CompleteCourseViewPage', () => {
  let component: CompleteCourseViewPage;
  let fixture: ComponentFixture<CompleteCourseViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteCourseViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteCourseViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
