import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarvelService } from 'src/app/core/services/marvel.service';

@Component({
  selector: 'app-personagens-lista',
  templateUrl: './personagens-lista.component.html',
  styleUrls: ['./personagens-lista.component.css']
})
export class PersonagensListaComponent implements OnInit {

  personagens: any[] = [];

  pagina = 1;
  contador = 20;

  validacaoErro = false;
  load = true;

  constructor(
    private router: Router,
    private marvelService: MarvelService) { }

  ngOnInit(): void {
    this.marvelService.getAllCharacters().subscribe(
      (response) => {
        this.load = false,
        response.forEach( (personagem: any) => {
          if (personagem.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'){
            this.personagens.push(personagem);
          }
      }
      );
    },  (erroResponse) => { alert(`**Error**\nCode: ${erroResponse.error.code}\nStatus: ${erroResponse.error.status}
    `), this.validacaoErro = true , this.load = false; });
  }

  voltarParaLista(): void{
    this.router.navigate(['/']);
  }

}
