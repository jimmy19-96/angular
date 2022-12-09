import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {
  confirmacion: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  registro(): void {
    alert("Registro Exitoso")
  }

}
