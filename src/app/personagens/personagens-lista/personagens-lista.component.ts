import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-personagens-lista',
  templateUrl: './personagens-lista.component.html',
  styleUrls: ['./personagens-lista.component.css']
})
export class PersonagensListaComponent implements OnInit {

  personagens: any[] = []

  pagina = 1;
  contador = 20;

  constructor(private marvelService : MarvelService) { }

  ngOnInit(): void {
    this.marvelService.getAllCharacters().subscribe(
      (response) => { response['data']['results'].forEach( (personagem: any) => {      
          if(personagem['thumbnail']['path'] != "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"){           
            this.personagens.push(personagem)
          }
      })}
      )  
  
  }

}
