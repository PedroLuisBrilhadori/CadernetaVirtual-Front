import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormComponent } from './form.component';


@NgModule({
  declarations: [
    FormComponent
],
  imports: [
    CommonModule,
],
  providers: [],
  exports: [
    FormComponent
  ]
})
export class FormModule { }
