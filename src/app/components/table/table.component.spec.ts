import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ColumnsTableModel, TableModule } from '.';

import { TableComponent } from './table.component';

const mockData = [
  { id: '1', teste: 'Pedro' },
  { id: '2', teste: 'Paulo' },
];

const mockColumns: ColumnsTableModel[] = [
  { name: 'id', displayedName: 'id', sort: false },
  { name: 'teste', displayedName: 'nome', sort: true },
];

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent],
      imports: [
        NoopAnimationsModule,
        MatTableModule,
        MatCheckboxModule,
        MatSortModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.data = mockData;
    component.displayedColumns = mockColumns;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have component Data', () => {
    expect(component.dataSource.filteredData.length).toEqual(2);
    expect(component.columnsToDisplay.length).toEqual(mockColumns.length);
  });
});
