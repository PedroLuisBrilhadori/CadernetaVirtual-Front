import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutMainComponent } from './layout-main.component';
import { TableModule } from '../table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [LayoutMainComponent],
  imports: [CommonModule, BrowserAnimationsModule, TableModule],
  exports: [LayoutMainComponent],
})
export class LayoutMainModule {}
