import {ChangeDetectionStrategy, Component, EventEmitter, inject, output, Output} from "@angular/core";
import {provideNativeDateAdapter} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormField} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {DatePipe} from "@angular/common";


@Component({
    selector: 'app-calendar',
    standalone: true,
    template: `
        <mat-form-field appearance="outline">
            <mat-label>Wybierz datę</mat-label>
            <input matInput [matDatepicker]="picker" [value]="today" [(ngModel)]="selectedDate" readonly>
            <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
            <mat-datepicker touchUi #picker></mat-datepicker>
        </mat-form-field>
    `,
    providers: [provideNativeDateAdapter(), DatePipe],
    imports: [MatDatepickerModule, MatFormField, MatInputModule, FormsModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {
    readonly today = new Date();
    selectedDate = this.today;
    datepipe = inject(DatePipe);

    private dateToString(){
        return this.datepipe.transform(this.selectedDate, 'dd-MM-yyyy') ?? '';
    }

    dateSelected = output<string>();

    emitDate() {
        this.dateSelected.emit(this.dateToString());
    }
}