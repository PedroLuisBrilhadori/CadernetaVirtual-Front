import { Component, NgModule, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColumnsTableModel, TableModule } from '.';

import { TableComponent } from './table.component';

@Component({
  template: `
    <app-table
      [dataSource]="data"
      [displayedColumns]="columns"
      (selectedRow)="selected($event)"
      [multiSelect]="true"
    ></app-table>
  `,
})
class TemplateTestTable {
  @ViewChild(TableComponent)
  table: TableComponent;

  data: any[] = [
    { id: '1', teste: 'Pedro' },
    { id: '2', teste: 'Paulo' },
  ];

  columns: ColumnsTableModel[] = [
    { name: 'id', displayedName: 'id', sort: false },
    { name: 'teste', displayedName: 'nome', sort: true },
  ];

  selected(event: any) {
    console.log(event);
  }
}

@NgModule({
  declarations: [TemplateTestTable],
  imports: [TableModule],
})
class TestModule {}

describe('TableComponent', () => {
  let component: TemplateTestTable;
  let fixture: ComponentFixture<TemplateTestTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateTestTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
