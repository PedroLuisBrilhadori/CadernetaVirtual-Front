import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutMainComponent } from './layout-main.component';
import { TableModule } from '../table';
import { ToolBarModule } from '../tool-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [LayoutMainComponent],
  imports: [CommonModule, BrowserAnimationsModule, TableModule, ToolBarModule],
  exports: [LayoutMainComponent],
})
export class LayoutMainModule {}
