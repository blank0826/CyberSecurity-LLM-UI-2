import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarHeaderComponent } from './navbar-header/navbar-header.component';
import { ChatbotPageComponent } from './chatbot-page/chatbot-page.component';
import { ModelUploadComponent } from './model-upload/model-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarHeaderComponent,
    ChatbotPageComponent,
    ModelUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
