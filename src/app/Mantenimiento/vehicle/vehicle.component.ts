import { Component } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-vehicle',
  standalone: true,
    imports: [
        ReactiveFormsModule
    ],
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.scss'
})
export default class VehicleComponent {

}
