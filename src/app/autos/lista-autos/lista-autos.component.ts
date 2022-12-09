import { Component, OnInit } from "@angular/core";
import { Auto } from "../../datos/auto";
import { faStar } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "lista-autos",
    templateUrl: "./lista-autos.component.html"
})
export class ListaAutosComponent implements OnInit {
    tituloListaAutos: string="Lista de Automoviles"
    
    listaAutos: Auto[] = [];
    listaAutosFiltrados: Auto[] = [];

    muestraImagen: boolean=false;
    anchoImagen = 120;
    margenImagen = 3;

    listaEstrellas = [];
    faStar = faStar;

    private _filtro: string="";

    constructor() {  }

    ngOnInit(): void {
        this.listaAutos = [
            {
                "id": 1,
                "marca": "Audi",
                "modelo": "A4",
                "anio": 2020,
                "color": "Verde Claro",
                "kilometros": 20500,
                "calificacion": 4.4,
                "precio": 2500000,
                "imagenUrl": "assets/imagenes/audia4.jpg"
            },
            {
                "id": 2,
                "marca": "Mercedez Benz",
                "modelo": "A1",
                "anio": 2018,
                "color": "Blanco",
                "kilometros": 700,
                "calificacion": 4,
                "precio": 3000000,
                "imagenUrl": "assets/imagenes/Mercedes-Benz.jpg"
            },
            {
                "id": 3,
                "marca": "Audi",
                "modelo": "E-TRON",
                "anio": 2020,
                "color": "Negro",
                "kilometros": 40500,
                "calificacion": 5,
                "precio": 2500000,
                "imagenUrl": "assets/imagenes/audi-e-tron.webp"
            },
            {
                "id": 4,
                "marca": "Jaguar",
                "modelo": "BX-456",
                "anio": 2020,
                "color": "Negro",
                "kilometros": 0,
                "calificacion": 2,
                "precio": 5250000,
                "imagenUrl": "assets/imagenes/jaguar.jpg"
            }
        ]
        this.listaAutosFiltrados = this.listaAutos;
    }

    get filtro(): string {
        return this._filtro;
    }
    set filtro( filtro:string ) {
        this._filtro=filtro;
        this.filtraAutos(filtro);
    }
    filtraAutos( filtrarPor:string ):void{
        filtrarPor=filtrarPor.toLocaleLowerCase();
        this.listaAutosFiltrados = this.listaAutos.filter(
            ( auto:Auto ) => auto.marca.toLocaleLowerCase().includes( filtrarPor )
        )
    }

    toggleImage(): void {
        this.muestraImagen = !this.muestraImagen;
    }

    onClickCalificacion( mensaje: string): void {
        alert("dieron click en la calificación: " + mensaje);
    }
}