import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonagemInfoComponent } from './personagem-info/personagem-info.component';
import { PersonagensListaComponent } from './personagens-lista/personagens-lista.component';

const routes: Routes = [
  {path: '' , component: PersonagensListaComponent},
  {path: 'personagem/:id', component: PersonagemInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonagensRoutingModule { }
