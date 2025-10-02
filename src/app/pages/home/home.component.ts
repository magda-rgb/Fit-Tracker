import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatFabButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    standalone: true,
    selector: 'app-home',
    imports: [RouterLink, MatFabButton, MatIconModule],
    template: `
        <div class="video-bg">
            <video autoplay muted loop playsinline>
                <source src="assets/runner.mp4" type="video/mp4" />
            </video>
        </div>
        <section class="homeSection">
            <button
                    mat-fab
                    class="arrow-btn"
                    [routerLink]="['/tracker']"
                    aria-label="Przejdź do trackera"
            >
                <mat-icon fontIcon="arrow_forward"></mat-icon>
            </button>
        </section>
    `,
    styleUrls: ['home.component.css'],
})
export class HomeComponent {}
