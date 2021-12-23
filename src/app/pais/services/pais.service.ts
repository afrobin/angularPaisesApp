import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private apuUrl = 'https://restcountries.com/v3.1';

  get httpParams(){
    return  new HttpParams()
    .set('fields','name,flags,capital,population,cca2');
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino:string ): Observable<Country[]>{
    const url =`${this.apuUrl}/name/${termino}`;
    
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  buscarCapital(termino:string ): Observable<Country[]>{
    const url =`${this.apuUrl}/capital/${termino}`;
    
    return this.http.get<Country[]>(url,{params: this.httpParams});
  }

  getPaisPorCodigo(id:string ): Observable<Country>{
    const url =`${this.apuUrl}/alpha/${id}`;
    
    return this.http.get<Country>(url);
  }

  buscarRegion(region:string): Observable<Country[]>{
    

    const url =`${this.apuUrl}/region/${region}`;
    
    return this.http.get<Country[]>(url,{params: this.httpParams});
  }
}
