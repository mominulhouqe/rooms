// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AllRoomsComponent } from './all-rooms/all-rooms.component';
import { RightNavAllroomsComponent } from './right-nav-allrooms/right-nav-allrooms.component';


@NgModule({
  declarations: [AppComponent, RoomsComponent, AllRoomsComponent, RightNavAllroomsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
