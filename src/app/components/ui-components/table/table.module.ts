import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, MatTableModule, MatCheckboxModule, MatSortModule],
  exports: [TableComponent],
})
export class TableModule {}
