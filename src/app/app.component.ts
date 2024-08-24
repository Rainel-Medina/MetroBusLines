import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.scss'],
  imports: [MatButtonModule, MatMenuModule],
})
export class AppComponent {
  toggleSubmenu(event: Event) {
    const target = event.currentTarget as HTMLElement;
    const parentLi = target.parentElement;
    if (parentLi) {
      parentLi.classList.toggle('active');
    }
  }
}
