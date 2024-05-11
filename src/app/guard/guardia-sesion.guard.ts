import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ObservableService } from '../service/observable.service';

@Injectable({ providedIn: 'root' })
export class SessionGuard implements CanActivate {
  constructor(private observablesService: ObservableService, private router: Router) {}


  canActivate(): Observable<boolean> | boolean {
    return new Observable<boolean>(observer => {
      this.observablesService.obtenerValorAutenticacion().subscribe(autenticado => {
        if (autenticado) {
          observer.next(true);
          observer.complete();
        } else {
          this.router.navigate(['/pokemones']);
          observer.next(false);
          observer.complete();
        }
      });
    });
  }
}