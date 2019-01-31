import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostlistComponent } from './postlist/postlist.component';
import { FormsModule } from '@angular/forms';
import { PostlistitemComponent } from './postlistitem/postlistitem.component';
import { NewpostComponent } from './newpost/newpost.component';

@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    PostlistitemComponent,
    NewpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
