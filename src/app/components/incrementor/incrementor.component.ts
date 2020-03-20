import { Component, Input, Output, ViewChild, OnInit, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementor.component.html',
  styles: []
})
export class IncrementorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() legend: string = 'Legend Default';
  @Input() progress: number = 50;

  @Output() valueChanged: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('Leyenda', this.leyenda);
    // console.log('progreso', this.progreso);
  }

  ngOnInit() {
    // console.log('Leyenda', this.leyenda);
    // console.log('progreso', this.progreso);
  }

  onChanges( newValue: number ) {

    // let elemHTML: any = document.getElementsByName('progreso')[0];

    // console.log( this.txtProgress );

    if ( newValue >= 100 ) {
      this.progress = 100;
    } else if ( newValue <= 0 ) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }

    // elemHTML.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progress;

    this.valueChanged.emit( this.progress );

  }

  cambiarValor( valor: number ) {

    if ( this.progress >= 100 && valor > 0 ) {
      this.progress = 100;
      return;
    }

    if ( this.progress <= 0 && valor < 0 ) {
      this.progress = 0;
      return;
    }

    this.progress = this.progress + valor;

    this.valueChanged.emit( this.progress );

    this.txtProgress.nativeElement.focus();

  }

}
