import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.scss']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activateroute: ActivatedRoute,
    private paisService : PaisService
    
    ) { }

  ngOnInit(): void {

    this.activateroute.params
    .pipe(
      switchMap(({id}) => //desesctructuracion del params
        this.paisService.getPaisPorCodigo(id)
      ),
      tap(console.log)
    )
    .subscribe(pais =>{
      this.pais=pais[0];
    })

    
    //Forma que tambien se puede realizar


  //   this.activateroute.params
  //   .subscribe(params => {
  //     console.log(params.id);
  //     this.paisService.getPaisPorCodigo(params.id)
  //     .subscribe(pais =>{
  //       console.log(pais);
  //     })
  //   })
  
}

}
