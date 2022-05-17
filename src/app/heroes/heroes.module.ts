import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    //Componentes
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    //Visibilidad Fuera del Modulo
    exports:[
        ListadoComponent
    ],
    //Solo se importan los Modulos
    imports:[
        CommonModule
    ]
})
export class HeroesModule {

}