import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeftComponent } from './left/left.component';
import { AboutComponent } from './about/about.component';
import { RightComponent } from './right/right.component';


const routes: Routes = [
  {path: ' ', component:AboutComponent},
  {path: 'right', component:RightComponent, data: {animation: 'isRight'}},
  {path: 'left', component:LeftComponent, data: {animation: 'isLeft'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
