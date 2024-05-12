import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ObservableService } from '../../../service/observable.service';
@Component({
  selector: 'app-body',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,FormsModule,MatFormFieldModule,MatInputModule,
    ReactiveFormsModule, CommonModule
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  userFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required]);
 
constructor(private router: Router,private observablesService: ObservableService) {}
verificarInicio(): void {
  const username = this.userFormControl.value ?? '';
  const password = this.passwordFormControl.value ?? '';

  const credencialesCorrectas = (username === 'omar' && password === 'omar123');

  if (credencialesCorrectas) {
    this.observablesService.actualizarValorAutenticacion(true);
    this.router.navigate(['/pokemones']);
  } else {
    alert('Usuario o contraseña incorrectos');
  }
}
}