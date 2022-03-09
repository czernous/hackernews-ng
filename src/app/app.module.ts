import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StoriesComponent } from './components/stories/stories.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, StoriesComponent, LoaderComponent, HeaderComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
