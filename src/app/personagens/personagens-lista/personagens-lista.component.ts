import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personagens-lista',
  templateUrl: './personagens-lista.component.html',
  styleUrls: ['./personagens-lista.component.css']
})
export class PersonagensListaComponent implements OnInit {

  personagens: String[] = ['Homem de Ferro' , 'Capitão América', "Homem Formiga",
  'Thanos', 'Hulk', 'Homem de Ferro' , 'Capitão América', "Homem Formiga",'Thanos', 'Hulk', 'Homem de Ferro' , 'Capitão América', "Homem Formiga"
]

  constructor() { }

  ngOnInit(): void {
  }

}
