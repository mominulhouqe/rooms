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

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    AllRoomsComponent,
    RightNavAllroomsComponent,
    LeftSidebarComponent,
    GiftHomeComponent,
    AddedGiftComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [ ],
  bootstrap: [AppComponent],
})
export class AppModule {}
