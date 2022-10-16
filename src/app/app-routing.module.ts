import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AutorComponent } from './autor/autor.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"autor", component:AutorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
