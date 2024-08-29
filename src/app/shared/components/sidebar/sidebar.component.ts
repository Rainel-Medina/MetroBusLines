import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink, RouterLinkActive
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  toggleSubmenu(event: Event) {
    const target = event.currentTarget as HTMLElement;
    const parentLi = target.parentElement;
    if (parentLi) {
      parentLi.classList.toggle('active');
    }
  }
}
