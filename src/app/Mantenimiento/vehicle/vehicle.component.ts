import { Component } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-vehicle',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.scss'
})
export default class VehicleComponent {

}
