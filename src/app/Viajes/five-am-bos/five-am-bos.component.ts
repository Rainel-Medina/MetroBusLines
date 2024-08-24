import { Component } from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-five-am-bos',
  standalone: true,
  imports: [
    MatFormField,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  templateUrl: './five-am-bos.component.html',
  styleUrl: './five-am-bos.component.scss'
})
export class FIVEAMBOSComponent {

}
