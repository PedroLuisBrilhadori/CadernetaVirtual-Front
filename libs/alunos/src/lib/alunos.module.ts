import { NgModule } from '@angular/core';
import { TableModule } from 'libs/ui';
import { AlunosComponent } from './alunos.component';
import { LayoutMainComponent } from './layout-main/layout-main.component';

@NgModule({
  declarations: [AlunosComponent, LayoutMainComponent],
  imports: [TableModule],
  exports: [AlunosComponent, LayoutMainComponent],
})
export class AlunosModule {}
