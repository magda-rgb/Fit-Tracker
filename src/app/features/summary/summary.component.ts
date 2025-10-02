import {Component, inject} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AppDataService} from "../../core/services/app-data.service";


@Component({
    selector: 'app-summary',
    standalone: true,
    imports: [CommonModule],
    styleUrls: ['./summary.component.css'],
    template: `
        @let list = data();
        
        @if (list?.length) {
            <div class="summary-container">
                @for (item of list; track item.chosenDate){
                    <div class="summary">
                      <h3>📊 Podsumowanie: </h3>
                        <ul class="summary-list">
                            <li>Data: <span> {{ item.chosenDate }}</span></li>
                            <li>💧 Wypite szklanki wody <span> {{ item.countWater }}</span></li>
                            <li>🚶‍♂️ Ilość kroków<span> {{ item.countSteps }}</span></li>
                            <li>📖 Przeczytane strony<span> {{ item.countPages }}</span></li>
                            <li>😴 Ilość snu<span> {{ item.countSleepHour }}h {{ item.countSleepMin }}m</span></li>
                            <li>💻 Godziny pracy<span> {{ item.countWork }}</span></li>
                        </ul>
                    </div>
                }
            </div>
        }
    `,
})
export class SummaryComponent {
    private ds = inject(AppDataService);

    data = this.ds.data;
}
