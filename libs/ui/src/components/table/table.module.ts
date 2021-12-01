import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableComponent } from './table.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    RouterModule,

    MatIconModule,
    MatButtonModule,
    MatTableModule,
  ],
  exports: [TableComponent],
})
export class TableModule {}
