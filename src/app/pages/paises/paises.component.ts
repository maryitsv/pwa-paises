import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/interfaces/pais.interface';
import { PaisesService } from 'src/app/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit{
  paises: Pais[] = [];
  constructor(public paisService: PaisesService){}

  ngOnInit(){
    this.loadPaises();
  }

  loadPaises(){
    this.paisService.getPaises().then(paises => {
      this.paises = paises;
    })
  }
}
