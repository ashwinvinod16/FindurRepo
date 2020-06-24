import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserContentComponent } from './user-content/user-content.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'user/:id',
    component:UserContentComponent
  },
  {
    path:"",
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
