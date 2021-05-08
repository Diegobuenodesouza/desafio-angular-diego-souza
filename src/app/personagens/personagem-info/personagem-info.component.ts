import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personagem-info',
  templateUrl: './personagem-info.component.html',
  styleUrls: ['./personagem-info.component.css']
})
export class PersonagemInfoComponent implements OnInit {


  constructor(private router : Router) { }

  ngOnInit(): void {
  }


  voltarParaLista(): void{
    this.router.navigate(['/'])
  }
}
