import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from "../../app-header/header/header.component";
import { BodyComponent } from "../../app-body/body/body.component";
import { FooterComponent } from "../../app-footer/footer/footer.component";
@Component({
    selector: 'app-inicio',
    standalone: true,
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.css',
    imports: [HeaderComponent, BodyComponent, FooterComponent]
})
export class InicioComponent {
  mostrarBotonCerrarSesion: boolean = false;

  constructor(private   router: Router) {}


}
