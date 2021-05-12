import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private toastr: ToastrService,
    private marvelService: MarvelService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void{
    this.marvelService.getAllCharacters().subscribe(
      (response) => {
        this.load = false,
        response.forEach( (personagem: any) => {
          if (personagem.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'){
            this.personagens.push(personagem);
          }
      }
      );
    },  () => { this.toastr.warning('Algo deu errado, verifique sua internet', 'Erro') , this.validacaoErro = true , this.load = false; });
  }


  voltarParaLista(): void{
    this.router.navigate(['/']);
  }

}
