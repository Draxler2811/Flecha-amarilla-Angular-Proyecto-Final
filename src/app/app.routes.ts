import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/app-inicio/inicio/inicio.component';
import { PokemonesComponent } from './components/app-pokemones/pokemones/pokemones.component';
import { GuardiaSesionGuard } from './guard/guardia-sesion.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'pokemones', component: PokemonesComponent, canActivate: [GuardiaSesionGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
