import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ComicsModule } from '../comics/comics.module';

import { PersonagensRoutingModule } from './personagens-routing.module';
import { PersonagensListaComponent } from './personagens-lista/personagens-lista.component';
import { PersonagemInfoComponent } from './personagem-info/personagem-info.component';



@NgModule({
  declarations: [
    PersonagensListaComponent,
    PersonagemInfoComponent,  
     
  ],
  imports: [
    CommonModule,
    PersonagensRoutingModule,
    NgxPaginationModule,
    ComicsModule
    
  ],
  exports: [
    PersonagensListaComponent, 
  ]
})
export class PersonagensModule { }
