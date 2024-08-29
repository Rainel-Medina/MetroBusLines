import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {SidebarComponent} from "./shared/components/sidebar/sidebar.component";
import {FooterComponent} from "./shared/components/footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.scss'],
  imports: [MatButtonModule, MatMenuModule, RouterLink, RouterLinkActive, RouterOutlet, SidebarComponent, FooterComponent],
})
export class AppComponent {
  menuActivo = false;

  toggleMenu() {
    this.menuActivo = !this.menuActivo;
  }
}
