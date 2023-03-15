import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pais } from 'src/app/interfaces/pais.interface';
import { PaisesService } from 'src/app/paises.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit{

  public pais: Pais | undefined;

  constructor(public paisesService: PaisesService, private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    const paisId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(paisId);

    this.loadPais(paisId);
  }

  loadPais(paisId: string | null) {
    if (paisId) {
      this.paisesService.getPaisById(paisId).then(result => {
        console.log('lo que trajo', result);
        this.pais = result;
      });
    }
  }
}
