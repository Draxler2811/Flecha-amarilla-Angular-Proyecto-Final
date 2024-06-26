import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from "../../app-header/header/header.component";
import { FooterComponent } from "../../app-footer/footer/footer.component";
import { ObtenerDatosService } from '../../../service/obtener-datos.service';
import { Pokemon } from '../../../entities/pokemon';
import { FormBuilder, FormControl, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-pokemones',
    standalone: true,
    templateUrl: './pokemones.component.html',
    styleUrl: './pokemones.component.css',
    imports: [HeaderComponent, FooterComponent,FormsModule,CommonModule,MatTableModule,ReactiveFormsModule]
})
export class PokemonesComponent implements OnInit {
  displayedColumns: string[] = ['Nombre','URL'];
  valores:any[]=[];
  pokemon:Pokemon = new Pokemon();
  checkoutForm : any;
  mostrarFormulario: boolean = false;
  constructor(private   router: Router,private obtenerDatosService : ObtenerDatosService,
    private formBuilder: FormBuilder,

  ) {

  this.checkoutForm = this.formBuilder.group({
    name:new FormControl(null,[Validators.minLength(3)]),
    url: new FormControl(null,[Validators.maxLength(15)]),
  });
  }
  ngOnInit(): void {
    this.getPokemon();
  }
  
  getPokemon() : void{
    this.obtenerDatosService.getPokemon('https://pokeapi.co/api/v2/pokemon').subscribe(
      (items :any) =>{
        console.log(items.results);
        this.valores=items.results;
      }
    )
  }
  
  onSubmit(valorFormulario:any){
    const name = this.checkoutForm.get('name').value;
    const url = this.checkoutForm.get('url').value;
  
    if (!name || !url) {
      alert('Por favor completa todos los campos');
      return;
    }
    if((this.checkoutForm.invalid)){
      alert('Formulario incorrecto')
    }else {
  this.valores.push(valorFormulario);
  this.checkoutForm.reset();
  this.mostrarFormulario = false;
    }
  }
  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario; 
  }
  deleteRow(row: any) {
    const index = this.valores.indexOf(row);
    if (index > -1) {
      this.valores.splice(index, 1);
    }
  }
  
}
