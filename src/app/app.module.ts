import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GridModule, CardModule, ToolbarModule, FormModule} from 'libs/ui';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    FormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
