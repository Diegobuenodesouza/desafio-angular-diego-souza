import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MarvelService } from 'src/app/core/services/marvel.service';

@Component({
  selector: 'app-personagem-info',
  templateUrl: './personagem-info.component.html',
  styleUrls: ['./personagem-info.component.css']
})
export class PersonagemInfoComponent implements OnInit {

  personagem: any;
  pDescricao = false;
  pId = false;

  validacaoErro = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private marvelService: MarvelService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((parametro: Params) => {
      this.marvelService.getCharacter(parametro.id).subscribe(
      (response) => { this.personagem = response[0];
        },
        (erroResponse) => { alert(`**Error**\nCode: ${erroResponse.error.code}\nStatus: ${erroResponse.error.status}`),
        this.validacaoErro = true; }
        );
      });
  }

  voltarParaLista(): void{
    this.router.navigate(['/']);
  }

}
