import { Component, Input, OnInit, Output } from '@angular/core';
import { ColumnsTableModel } from '.';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
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

  @Output('selectedRow')
  selected: EventEmitter<any> = new EventEmitter<any>();

  columnsToDisplay: string[] = [];

  ngOnInit() {
    if (this.displayedColumns === undefined || this.data === undefined) {
      throw Error('fi, a tabela não tá preenchida...');
    } else {
      this.displayedColumns.forEach((column) => {
        this.columnsToDisplay.push(column.displayedName);
      });
    }
  }

  selectRow(event: any) {
    this.selected.emit(event);
  }
}
