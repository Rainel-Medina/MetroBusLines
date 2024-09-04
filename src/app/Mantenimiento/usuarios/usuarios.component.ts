import { Component } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export default class UsuariosComponent {

}
