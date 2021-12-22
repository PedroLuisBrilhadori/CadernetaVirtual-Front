import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { ToolBarComponent } from './tool-bar.component';

@NgModule({
  declarations: [ToolBarComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule],
  exports: [ToolBarComponent],
})
export class ToolBarModule {}
