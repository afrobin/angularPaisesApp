import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.scss']
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  hayCapital: boolean = false;
  paises: Country[]=[];

  constructor(private paisService: PaisService) { }

  buscar(termino: string){
    this.hayError = false;
    this.hayCapital = false;
    this.termino = termino;

    console.log(termino);

    this.paisService.buscarCapital(termino)
    .subscribe((paises) => {
      this.paises = paises;
      this.hayCapital = true;
      console.log(paises);

    },
    (err)=>{
      this.hayError = true;
      this.paises=[];
      console.log(err);
    });
  }

}
