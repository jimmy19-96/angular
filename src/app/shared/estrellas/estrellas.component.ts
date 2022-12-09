import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'estrellas',
  templateUrl: './estrellas.component.html',
  styleUrls: ['./estrellas.component.css']
})
export class EstrellasComponent implements OnChanges {

  faStar = faStar;
  estrellasCalificacion: any[] = [];

  @Input() calificacion: number = 0;
  @Output() estrellasClick = new EventEmitter<string>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.estrellasCalificacion = [];
    for (let i=1; i<=this.calificacion; i++) {
      this.estrellasCalificacion.push(1);
    }   
  }

  onClick( estrellas: number ): void {
    this.estrellasClick.emit("calificacion: " + estrellas)
  }

}

