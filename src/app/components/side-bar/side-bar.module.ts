import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SideBarComponent],
  imports: [CommonModule, MatMenuModule, MatButtonModule],
  exports: [SideBarComponent],
})
export class SideBarModule {}
