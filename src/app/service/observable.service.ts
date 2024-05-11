import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  private autenticado$ = new BehaviorSubject<boolean>(false);

  actualizarValorAutenticacion(autenticado: boolean) {
    this.autenticado$.next(autenticado);
  }

  obtenerValorAutenticacion() {
    return this.autenticado$.asObservable();
  }

  constructor() { }
}