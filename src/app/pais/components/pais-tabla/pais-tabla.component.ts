import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.scss']
})
export class PaisTablaComponent {

  @Input() paises: Country[] = [];
  @Input() hayPais:boolean = false;
 
  constructor() { }



}
