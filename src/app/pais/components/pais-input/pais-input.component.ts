import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.scss']
})
export class PaisInputComponent implements OnInit {
  

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder:string = '';
  termino: string = "";

  debouncer: Subject<string> = new Subject;

  buscar(){
    this.onEnter.emit(this.termino);
  }
 
  ngOnInit() {
      this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe(valor =>{
        this.onDebounce.emit(valor);
      })
  }
  teclaPresionada(){
    this.debouncer.next(this.termino);
  }
}
