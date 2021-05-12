import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private marvelService: MarvelService) { }

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(): void{
    this.activatedRoute.params.subscribe((parametro: Params) => {
      this.marvelService.getCharacter(parametro.id).subscribe(
      (response) => { this.personagem = response[0];
        },
        (erroResponse) => {  this.showErro(erroResponse.error.code, erroResponse.error.status),
        this.validacaoErro = true; }
        );
      });
  }

  showErro(codigoErro: string, title: string): void {
    this.toastr.warning(`Status : ${title}`, `Erro: ${codigoErro}`, {timeOut: 5000});
  }


  voltarParaLista(): void{
    this.router.navigate(['/']);
  }

}
