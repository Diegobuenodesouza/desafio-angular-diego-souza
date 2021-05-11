import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DolarService } from 'src/app/core/services/dolar.service';
import { MarvelService } from 'src/app/core/services/marvel.service';
import { Dolar } from 'src/app/shared/models/dolar';


@Component({
  selector: 'app-comics-info',
  templateUrl: './comics-info.component.html',
  styleUrls: ['./comics-info.component.css']
})
export class ComicsInfoComponent implements OnInit {

  comicMaisCaro : any;
  dolar : Dolar = new Dolar();  
  valorEmReais = 0;  

  constructor(
    private dolarService : DolarService,
    private activatedRoute: ActivatedRoute,
    private marvelService : MarvelService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
    (parametro : Params) => {
      this.marvelService.getComicsCharacterById(parametro.id).subscribe(
        (response) => { 

          this.comicMaisCaro = response[0], 

          response.forEach((comic: any) => {
           if(comic.prices[0].price  > this.comicMaisCaro.prices[0].price){
             this.comicMaisCaro = comic
           }
          });
      })  
    })

    this.dolarService.getDolarAtual().subscribe(
      (response : any) => { this.dolar = response[0],
       this.valorEmReais =  Number(this.dolar.ask)
    }
    )
  }

}
