import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from "../../app-header/header/header.component";
import { FooterComponent } from "../../app-footer/footer/footer.component";
import { ObtenerDatosService } from '../../../service/obtener-datos.service';
import { NgModule } from '@angular/core';

@Component({
    selector: 'app-pokemones',
    standalone: true,
    templateUrl: './pokemones.component.html',
    styleUrl: './pokemones.component.css',
    imports: [HeaderComponent, FooterComponent]
})
export class PokemonesComponent {
  valores:any[]=[];

  constructor(private   router: Router,private obtenerDatosService : ObtenerDatosService) {}
  getPokemon() : void{
    this.obtenerDatosService.getPokemon('https://pokeapi.co/api/v2/pokemon').subscribe(
      (items :any) =>{
        console.log(items.results);
        this.valores=items.results;
      }
    )
  }
}
