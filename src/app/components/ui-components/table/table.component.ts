import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ColumnsTableModel } from '.';
import { EventEmitter } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input('dataSource')
  data: any[];

  @Input('displayedColumns')
  displayedColumns: ColumnsTableModel[];

  @Input('multiSelect')
  multiSelect: boolean = false;

  @Output('selectedRow')
  selected: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild(MatSort) sort: MatSort;

  columnsToDisplay: string[] = [];

  selection = new SelectionModel<any>(true, []);

  dataSource: any;

  constructor(private _liveAnnoucer: LiveAnnouncer) {}

  ngOnInit() {
    if (this.multiSelect) {
      this.columnsToDisplay.push('select');
    }

    if (this.displayedColumns === undefined || this.data === undefined) {
      throw Error('fi, a tabela não tá preenchida...');
    } else {
      this.displayedColumns.forEach((column) => {
        this.columnsToDisplay.push(column.displayedName);
      });
      if (this.data) {
        this.dataSource = new MatTableDataSource(this.data);
      }
    }
  }

  selectRow(event: any) {
    if (this.multiSelect) {
      this.selection.toggle(event);
      this.selected.emit(this.selection.selected);
    } else this.selected.emit(event);
  }

  // -----------------------------------------------------------------------------------------
  // -------------------------------------- checkboxes ---------------------------------------
  // -----------------------------------------------------------------------------------------

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.filteredData.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.filteredData);
    this.selected.emit(this.selection.selected);
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }

  // -----------------------------------------------------------------------------------------
  // ----------------------------------------- sort ------------------------------------------
  // -----------------------------------------------------------------------------------------

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  changeSort(sortState: any) {
    if (sortState.direction) {
      this._liveAnnoucer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnoucer.announce('Sorted clared');
    }
  }
}
