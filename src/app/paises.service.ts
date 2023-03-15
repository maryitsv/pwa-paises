import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pais } from './interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private apiUrl = 'https://restcountries.com/';
  private version = 'v2';
  private paises: Pais[] = [];

  constructor(private httpService: HttpClient) { }

  async getPaises(): Promise<Pais[]> {

    if (this.paises.length > 0) {
      return Promise.resolve(this.paises);
    }

    return new Promise(resolve => {
      this.httpService.get(this.apiUrl + this.version + '/lang/es')
        .subscribe((result) => {
          console.log('paises', result);
          this.paises = result as Pais[];
          resolve(this.paises);
        });
    });

  }

  getPaisById(id:string){
    if(this.paises.length>0){
      const pais = this.paises.find(p =>p.alpha3Code === id);
      return Promise.resolve(pais);
    }
    return this.getPaises().then( paises =>{
      const pais = this.paises.find(p =>p.alpha3Code === id);
      return Promise.resolve(pais);
    });
  }

}
