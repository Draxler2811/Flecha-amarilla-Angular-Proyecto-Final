import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ObservableService } from '../service/observable.service';

@Injectable({ providedIn: 'root' })
export class GuardiaSesionGuard implements CanActivate {
  constructor(
    private observableService: ObservableService,
    private router: Router
  ) {}

  canActivate(): boolean {
    let autenticado = false;
    this.observableService.obtenerValorAutenticacion().subscribe(value => {
      autenticado = value;
    });

    if (!autenticado) {
      this.router.navigate(['/inicio']); 
      alert('No se puede ingresar a la ruta');
      return false;
    }
    return true;
  }
}
