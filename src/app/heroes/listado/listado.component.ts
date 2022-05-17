import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes: string[] = ['Goku','Picolo','Gohan','Vegeta'];
  delHeroe: string = "";

  borrarHeroe():void{
    this.delHeroe = this.heroes.shift()||"";
  }
}
