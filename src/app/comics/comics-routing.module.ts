import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsInfoComponent } from './comics-info/comics-info.component';

const routes: Routes = [
  {path: 'personagem/:id/comics' , component: ComicsInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicsRoutingModule { }
