import {Component} from '@angular/core';

@Component({
    selector:'app-cpntador',
    styleUrls: ['../../app.component.css'],
    template:`
    <h1>{{title}}</h1>
    <h2>La base es <strong>{{base}}</strong></h2>

    <button (click)="acumular(+base)">+{{base}}</button>

    <span>{{numero}}</span>

    <button (click)="acumular(-base)">-{{base}}</button>
    `
})
export class ContadorComponent{
    public title:string = 'Contador App';
    public numero: number = 10;
    public base:number = 5;
    
    acumular(valor: number){
      this.numero += valor;
    }
}