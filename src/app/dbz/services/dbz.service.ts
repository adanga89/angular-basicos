import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Trunks',
          poder: 3500
        },
        {
          nombre: 'Vegeta',
          poder: 8600
        }
      ];

    get personajes(): Personaje[]{
        return [...this._personajes];
    } 

    constructor(){
        //console.log("Servicio Inicializado");
    }

    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }
}