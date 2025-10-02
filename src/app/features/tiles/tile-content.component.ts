import {Component, inject} from "@angular/core";
import { TileComponent } from "../../shared/ui/tile.component";
import {MatFabButton} from "@angular/material/button";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput, MatLabel} from "@angular/material/input";
import { AppDataService } from "../../core/services/app-data.service";
import {CalendarComponent} from "../../shared/ui/calendar.component";

@Component({
    selector: 'app-tile-content',
    standalone: true,
    imports: [TileComponent, MatFabButton, ReactiveFormsModule, MatFormField, MatInput, MatLabel, CalendarComponent],
    templateUrl:'tile-content.component.html',
    styleUrls: ['tile-content.component.css']
})
export class TileContentComponent {
    private fb = inject(FormBuilder);
    private ds = inject(AppDataService);
    chosenDate: string = '';

    onDateSelected(date: string) {
        this.chosenDate = date;
        console.log("Data: " + this.chosenDate)
    }

    form = this.fb.group({
        countWater: [0],
        countSteps: [0],
        countPages: [0],
        countSleepHour: [0],
        countSleepMin: [0],
        countWork: [0],
    });

    save() {
        const data = this.form.getRawValue();
        console.log('Dane z formularza', data);
        this.ds.save({
            chosenDate:  this.chosenDate,
            countWater: +data.countWater!,
            countSteps: +data.countSteps!,
            countPages: +data.countPages!,
            countSleepHour: +data.countSleepHour!,
            countSleepMin: +data.countSleepMin!,
            countWork: +data.countWork!,
        });
        console.log('Dane zapisane: ', this.ds)
        this.form.reset();
    }
}
