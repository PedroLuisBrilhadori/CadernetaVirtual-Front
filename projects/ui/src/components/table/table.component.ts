import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { MatTable } from "@angular/material/table";

@Component({
    selector: 'p-table',
    templateUrl: 'table.component.html',
    styles: [ `table {
      width: 80%;
    }`]
})

export class TableComponent implements OnInit {

  @Input('colunas') 
  public columns: any[]

  @Input('data')
  public dataSource: any[];

  
  @ViewChild(MatTable)
  table: MatTable<any>;

  constructor() { }
  
  displayedColumns: any[] = [];

  ngOnInit(){
    this.displayedColumns = this.columns.map(c => c.columnDef);
  }
}

