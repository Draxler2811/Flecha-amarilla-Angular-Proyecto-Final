import { Routes } from '@angular/router';
import { BodyComponent } from './components/app-body/body/body.component';
import { InicioComponent } from './components/app-inicio/inicio/inicio.component';
import { PokemonesComponent } from './components/app-pokemones/pokemones/pokemones.component';

export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'pokemones', component: PokemonesComponent},
      
];
