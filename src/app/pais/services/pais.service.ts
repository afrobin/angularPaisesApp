import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private apuUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  buscarPais(termino:string ): Observable<Country[]>{
    const url =`${this.apuUrl}/name/${termino}`;
    
    return this.http.get<Country[]>(url);
  }

  buscarCapital(termino:string ): Observable<Country[]>{
    const url =`${this.apuUrl}/capital/${termino}`;
    
    return this.http.get<Country[]>(url);
  }

  getPaisPorCodigo(id:string ): Observable<Country>{
    const url =`${this.apuUrl}/alpha/${id}`;
    
    return this.http.get<Country>(url);
  }
}
