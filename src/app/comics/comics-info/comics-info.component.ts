import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MarvelService } from 'src/app/core/services/marvel.service';

@Component({
  selector: 'app-comics-info',
  templateUrl: './comics-info.component.html',
  styleUrls: ['./comics-info.component.css']
})
export class ComicsInfoComponent implements OnInit {

  comicMaisCaro : any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private marvelService : MarvelService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
    (parametro : Params) => {
      this.marvelService.getComicsCharacterById(parametro.id).subscribe(
        (response) => { 

          this.comicMaisCaro = response['data']['results'][0],
                  
          response['data']['results'].forEach((comic: any) => {
            if (comic['prices'][0]['price'] > this.comicMaisCaro['prices'][0]['price']){
              this.comicMaisCaro = comic 
            }    
                 
          });
      
      })  

    })

    
  }

}
