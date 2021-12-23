import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.scss']
})
export class PorRegionComponent  {

  regiones: string[] = ['africa', 'america', 'asia','europe','oceania' ];

  paises: Country[] = [];
  regionActiva: string='';
  hayPais:boolean=false;

  constructor(private paisService: PaisService) { }

  getClaseCss(region:string):string{
    return (region === this.regionActiva) ? 'btn btn-primary margin-btn' : 'btn btn-outline-primary margin-btn'
  }

  activarRegion ( region:string){
    if(region === this.regionActiva){
      return;
    }

    this.regionActiva = region;
    this.paises =[];
    
    this.paisService.buscarRegion(region)
    .subscribe((pais)=>{
      this.paises= pais;
      this.hayPais = true;
    },
    (error) => {
      this.paises=[];
      this.hayPais= false;
      console.log(error);
    })
  }
}
