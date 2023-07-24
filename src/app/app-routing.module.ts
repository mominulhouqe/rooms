// app-routing.module.ts
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { AllRoomsComponent } from './all-rooms/all-rooms.component';
import { AppComponent } from './app.component';
import { GiftHomeComponent } from './gift-home/gift-home.component';
import { AddedGiftComponent } from './added-gift/added-gift.component';


const routes: Routes = [
 
  { path: '', component: RoomsComponent },
  { path: 'another-page', component: AllRoomsComponent },
  { path: 'home', component: RoomsComponent },
  {path:'gift-home', component:GiftHomeComponent},
  {path:'addgift', component:AddedGiftComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
