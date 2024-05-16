import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ObservableService {
  private autenticado$ = new BehaviorSubject<boolean>(false);

  actualizarValorAutenticacion(autenticado: boolean): void {
    this.autenticado$.next(autenticado);
  }

  obtenerValorAutenticacion() {
    return this.autenticado$.asObservable();
  }

  constructor() {}
}
