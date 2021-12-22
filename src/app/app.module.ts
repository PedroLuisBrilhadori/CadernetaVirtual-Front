import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutMainModule } from './components';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LayoutMainModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
