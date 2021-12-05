import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlunosModule } from 'libs/alunos/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AlunosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
