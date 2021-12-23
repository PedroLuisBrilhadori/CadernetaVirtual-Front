import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAddComponent } from './form-add.component';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [FormAddComponent],
  imports: [CommonModule, RouterModule, MatButtonModule, MatDialogModule],
  exports: [FormAddComponent],
})
export class FormAddModule {}
