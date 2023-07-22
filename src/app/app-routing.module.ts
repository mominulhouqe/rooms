// app-routing.module.ts
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { AllRoomsComponent } from './all-rooms/all-rooms.component';
import { AppComponent } from './app.component';


const routes: Routes = [
 
  { path: '', component: RoomsComponent },
  { path: 'another-page', component: AllRoomsComponent },
  { path: 'home', component: RoomsComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
