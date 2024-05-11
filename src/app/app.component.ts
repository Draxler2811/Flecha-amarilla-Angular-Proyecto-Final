import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/app-header/header/header.component';
import { BodyComponent } from './components/app-body/body/body.component';
import { FooterComponent } from './components/app-footer/footer/footer.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { Router } from 'express';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MatGridListModule,
    RouterLink,
    MatFormFieldModule,
    HeaderComponent,
    BodyComponent,
    FooterComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto_Final';
}
