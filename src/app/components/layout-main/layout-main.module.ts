import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutMainComponent } from './layout-main.component';
import { TableModule } from '../table';
import { ToolBarModule } from '../tool-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [LayoutMainComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    TableModule,
    ToolBarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  exports: [LayoutMainComponent],
})
export class LayoutMainModule {}
