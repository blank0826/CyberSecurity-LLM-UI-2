import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarHeaderComponent } from './navbar-header/navbar-header.component';
import { ChatbotPageComponent } from './chatbot-page/chatbot-page.component';
import { SecurityMetricsComponent } from './security-metrics/security-metrics.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MetricsCardsComponent } from './metrics-cards/metrics-cards.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DetailViewModalComponent } from './detail-view-modal/detail-view-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BanTopicsModalComponent } from './ban-topics-modal/ban-topics-modal.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarHeaderComponent,
    ChatbotPageComponent,
    SecurityMetricsComponent,
    MetricsCardsComponent,
    DetailViewModalComponent,
    BanTopicsModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
