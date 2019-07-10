import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertListPage } from './dessert-list.page';

describe('DessertListPage', () => {
  let component: DessertListPage;
  let fixture: ComponentFixture<DessertListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DessertListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DessertListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
