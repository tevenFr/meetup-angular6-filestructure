import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MysharedlibModule } from 'mysharedlib';

import { AppComponent } from './core/containers';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [],
  imports: [BrowserModule, MysharedlibModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
