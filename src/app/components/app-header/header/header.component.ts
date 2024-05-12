import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() mostrarBotonCerrarSesion: boolean = true;

  constructor(private   router: Router) {}

  CerrarSesion() : void{
    this.router.navigate(['/inicio']);

}
}
