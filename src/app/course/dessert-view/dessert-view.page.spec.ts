import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertViewPage } from './dessert-view.page';

describe('DessertViewPage', () => {
  let component: DessertViewPage;
  let fixture: ComponentFixture<DessertViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DessertViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DessertViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
