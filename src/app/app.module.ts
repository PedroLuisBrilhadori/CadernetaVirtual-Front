import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutMainModule } from './components';
import { appRoutes } from './components/layout-main/app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LayoutMainModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
