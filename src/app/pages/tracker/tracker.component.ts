import {Component} from '@angular/core';
import {TileContentComponent} from "../../features/tiles/tile-content.component";
import {SummaryComponent} from "../../features/summary/summary.component";

@Component({
  standalone: true,
  selector: 'app-tracker',
  imports: [TileContentComponent, SummaryComponent],
  template: `
    <main>
      <section class="tracker-section">
        <app-tile-content></app-tile-content>
      </section>
      <section class="tracker-section">
        <app-summary></app-summary>
      </section>
    </main>
  `,
  styleUrls: ['./tracker.component.css'],
})
export class TrackerComponent {}
