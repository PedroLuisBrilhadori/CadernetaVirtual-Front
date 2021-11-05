import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


import { FormComponent } from './form.component';


@NgModule({
  declarations: [
    FormComponent
],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,

    MatInputModule,
    MatFormFieldModule,
],
  providers: [],
  exports: [
    FormComponent
  ]
})
export class FormModule { }
