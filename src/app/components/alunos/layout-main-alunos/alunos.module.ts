import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableModule } from '../../ui-components';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AlunosComponent } from './alunos.component';

@NgModule({
  declarations: [AlunosComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    TableModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [AlunosComponent],
})
export class AlunosModule {}
