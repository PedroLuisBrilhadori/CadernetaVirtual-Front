import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutMainComponent } from './layout-main.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';

import { RouterModule } from '@angular/router';
import { AlunosModule } from '../alunos';
import { ToolBarModule, SideBarModule } from '../ui-components';

@NgModule({
  declarations: [LayoutMainComponent],
  imports: [
    CommonModule,

    AlunosModule,
    ToolBarModule,
    SideBarModule,

    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,

    RouterModule,
  ],
  exports: [LayoutMainComponent],
})
export class LayoutMainModule {}
