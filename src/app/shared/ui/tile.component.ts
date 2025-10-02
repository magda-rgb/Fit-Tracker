import {Component, input} from "@angular/core";

@Component({
    selector: 'app-tile',
    standalone: true,
    template: `
        <figure class="tile">
          @if (goalReached()){
              <div class="checkmark">
                  <img src="/assets/checkmark.svg" alt="done">
              </div>
          }
          <img [src]="imgSrc()" [alt]="alt() || ''">
          <div class="tile-footer">
              <ng-content></ng-content>
          </div>
          @if (goalReached()) {
            <div class="goalMessage">
              <span>Cel osiągnięty!</span>
            </div>
          }
        </figure>
  `,
    styleUrls: ['tile.component.css']
})
export class TileComponent {
    imgSrc = input<string>();
    alt = input<string>();
    goalReached = input<boolean>();
}
