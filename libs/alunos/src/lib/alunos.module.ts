import { NgModule } from '@angular/core';
import { TableMModule } from 'libs/ui/src/lib/table/table.component.module';
import { AlunosComponent } from './alunos.component';
import { LayoutMainComponent } from './layout-main/layout-main.component';

@NgModule({
  declarations: [AlunosComponent, LayoutMainComponent],
  imports: [TableMModule],
  exports: [AlunosComponent, LayoutMainComponent],
})
export class AlunosModule {}
