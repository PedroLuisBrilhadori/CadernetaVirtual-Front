import { Component, Input, OnInit, Output } from '@angular/core';
import { ColumnsTableModel } from '.';
import { EventEmitter } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input('dataSource')
  data: any[];

  @Input('displayedColumns')
  displayedColumns: ColumnsTableModel[];

  @Input('multiSelect')
  multiSelect: boolean = false;

  @Output('selectedRow')
  selected: EventEmitter<any> = new EventEmitter<any>();

  columnsToDisplay: string[] = [];

  selection = new SelectionModel<any>(true, []);

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
    }
  }

  selectRow(event: any) {
    if (this.multiSelect) this.selection.toggle(event);
    else this.selected.emit(event);
  }

  // -----------------------------------------------------------------------------------------
  // -------------------------------------- checkboxes ---------------------------------------
  // -----------------------------------------------------------------------------------------

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.data);
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }
}
