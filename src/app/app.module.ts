// app.module.ts
import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AllRoomsComponent } from './all-rooms/all-rooms.component';
import { RightNavAllroomsComponent } from './right-nav-allrooms/right-nav-allrooms.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { GiftHomeComponent } from './gift-home/gift-home.component';
import { AddedGiftComponent } from './added-gift/added-gift.component';
import { FormsModule } from '@angular/forms';
import { CoinHomeComponent } from './coin-home/coin-home.component';
import { ReportHomeComponent } from './report-home/report-home.component';
import {  HttpClientModule } from '@angular/common/http';
import { PostesHomeComponent } from './postes-home/postes-home.component';
import { PhotoGallaryComponent } from './photo-gallary/photo-gallary.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    AllRoomsComponent,
    RightNavAllroomsComponent,
    LeftSidebarComponent,
    GiftHomeComponent,
    AddedGiftComponent,
    CoinHomeComponent,
    ReportHomeComponent,
    PostesHomeComponent,
    PhotoGallaryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,FormsModule, HttpClientModule],
  providers: [ ],
  bootstrap: [AppComponent],
})
export class AppModule {}
