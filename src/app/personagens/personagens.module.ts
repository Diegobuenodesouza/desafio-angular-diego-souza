import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ComicsModule } from '../comics/comics.module';

import { PersonagensRoutingModule } from './personagens-routing.module';
import { PersonagensListaComponent } from './personagens-lista/personagens-lista.component';
import { PersonagemInfoComponent } from './personagem-info/personagem-info.component';
import { LoadComponent } from '../template/load/load.component';
import { ErrosApiComponent } from '../template/erros-api/erros-api.component';



@NgModule({
  declarations: [
    PersonagensListaComponent,
    PersonagemInfoComponent,
    LoadComponent,
    ErrosApiComponent

  ],
  imports: [
    CommonModule,
    PersonagensRoutingModule,
    NgxPaginationModule,
    ComicsModule
  ],
  exports: [
    PersonagensListaComponent, PersonagemInfoComponent, ErrosApiComponent, LoadComponent]
})
export class PersonagensModule { }
