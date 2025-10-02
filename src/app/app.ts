import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
    <main>
      <header class="app-header">
        <h1 [routerLink]="['/']" class="logo">Fit tracker</h1>
      </header>
      <router-outlet></router-outlet>
    </main>
    <footer class="app-footer">
      © 2025 Fit Tracker. Magdalena Szwarc.
    </footer>
  `,
  styleUrls: ['./app.css'],
})
export class App {}
