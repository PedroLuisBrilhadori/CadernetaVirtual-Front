import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar.component';

import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [SideBarComponent],
  imports: [CommonModule, MatMenuModule],
  exports: [SideBarComponent],
})
export class SideBarModule {}
