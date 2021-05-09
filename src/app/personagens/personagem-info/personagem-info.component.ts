import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-personagem-info',
  templateUrl: './personagem-info.component.html',
  styleUrls: ['./personagem-info.component.css']
})
export class PersonagemInfoComponent implements OnInit {

  personagem : any;
  pDescricao: boolean = false;

  constructor(
    private router : Router,    
    private activatedRoute :  ActivatedRoute,
    private marvelService : MarvelService) { }

  ngOnInit(): void {
    this.pDescricao = false;
    this.activatedRoute.params.subscribe((parametro : Params) => {
      this.marvelService.getCharacter(parametro.id).subscribe(
      (response) => {this.personagem = response['data']['results'][0],
      console.log(this.personagem)}
        )      
      })    
  }


  voltarParaLista(): void{
    this.router.navigate(['/'])
  }

  carregarDescricao():void{
    setTimeout(() => {
      this.pDescricao = true      
    }, 800);
  }
}