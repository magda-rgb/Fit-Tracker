import { Injectable, signal} from "@angular/core";

export interface AppData {
    chosenDate: string;
    countWater: number;
    countSteps: number;
    countPages: number;
    countSleepHour: number;
    countSleepMin: number;
    countWork: number;
}

const STORAGE_KEY = 'userData' as const;

@Injectable({ providedIn: 'root' })
export class AppDataService {
    private readonly _data = signal<AppData[]>([]);
    readonly data = this._data.asReadonly();

    save(d: AppData) {
        this._data.update(list => [...list, d]);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this._data()));
    }
}