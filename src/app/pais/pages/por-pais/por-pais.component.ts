import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss']
})
export class PorPaisComponent  {

  termino: string = '';
  hayError: boolean = false;
  hayPais: boolean = false;
  paises: Country[]=[];
  paisesSugeridos: Country[]=[];
  isSugerencias: boolean =false;

  constructor(private paisService: PaisService) { }

  buscar(termino: string){
    this.isSugerencias = false;
    this.hayError = false;
    this.hayPais = false;
    this.termino = termino;

    console.log(termino);

    this.paisService.buscarPais(termino)
    .subscribe((paises) => {
      this.paises = paises;
      this.hayPais = true;
      console.log(paises);

    },
    (err)=>{
      this.hayError = true;
      this.paises=[];
      console.log(err);
    });
  }

  sugerencias(termino: string){
      this.hayError = false;
      this.termino = termino;
      this.paisService.buscarPais(termino)
      .subscribe(paises => this.paisesSugeridos = paises.splice(0,5),
      (error) => this.paisesSugeridos = []
      );
  }
  buscarSugerido(termino:string){
    this.buscar(termino);
    
  }

}
