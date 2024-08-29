import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  toggleSubmenu(event: Event) {
    event.preventDefault(); // Previene el comportamiento por defecto del enlace
    const target = event.currentTarget as HTMLElement;
    const parentLi = target.parentElement;
    if (parentLi && parentLi.classList.contains('submenu')) {
      parentLi.classList.toggle('active');
    }
  }
}
