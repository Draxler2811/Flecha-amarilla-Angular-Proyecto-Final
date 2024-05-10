import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/app-header/header/header.component';
import { BodyComponent } from './components/app-body/body/body.component';
import { FooterComponent } from './components/app-footer/footer/footer.component';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MatGridListModule

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto_Final';
}
