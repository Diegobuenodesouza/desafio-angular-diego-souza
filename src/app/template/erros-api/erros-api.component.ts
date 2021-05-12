import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-erros-api',
  templateUrl: './erros-api.component.html',
  styleUrls: ['./erros-api.component.css']
})
export class ErrosApiComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {  }


}
