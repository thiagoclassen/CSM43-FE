import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertFormPage } from './dessert-form.page';

describe('DessertFormPage', () => {
  let component: DessertFormPage;
  let fixture: ComponentFixture<DessertFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DessertFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DessertFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
