import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableModule } from '../../ui-components';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AlunosComponent } from './alunos.component';
import { FormAddModule } from '../form-add';

@NgModule({
  declarations: [AlunosComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,

    TableModule,
    FormAddModule,

    MatCardModule,
    MatButtonModule,
  ],
  exports: [AlunosComponent],
})
export class AlunosModule {}
