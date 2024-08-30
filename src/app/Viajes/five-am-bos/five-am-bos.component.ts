import { Component } from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIcon} from "@angular/material/icon";
import {RouterOutlet} from "@angular/router";
import {CurrencyInputDirective} from "../../currency-input.directive";

@Component({
  selector: 'app-five-am-bos',
  standalone: true,
  imports: [
    MatFormField,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIcon,
    RouterOutlet,
    CurrencyInputDirective
  ],
  templateUrl: './five-am-bos.component.html',
  styleUrl: './five-am-bos.component.scss'
})
export default class FIVEAMBOSComponent {
  value = 'Clear me';
}
