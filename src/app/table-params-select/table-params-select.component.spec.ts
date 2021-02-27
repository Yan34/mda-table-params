import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableParamsSelectComponent } from './table-params-select.component';

describe('TableParamsSelectComponent', () => {
  let component: TableParamsSelectComponent;
  let fixture: ComponentFixture<TableParamsSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableParamsSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableParamsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
