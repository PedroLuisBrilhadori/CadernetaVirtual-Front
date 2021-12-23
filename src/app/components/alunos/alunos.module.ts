import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TableModule } from '../ui-components';

import { AlunosComponent } from './alunos.component';

@NgModule({
  declarations: [AlunosComponent],
  imports: [CommonModule, BrowserAnimationsModule, TableModule],
  exports: [AlunosComponent],
})
export class AlunosModule {}
