import { Component } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-consultas-usuarios',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './consultas-usuarios.component.html',
  styleUrl: './consultas-usuarios.component.scss'
})
export default class ConsultasUsuariosComponent {

}
