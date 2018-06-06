import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UIShareService {

    private storageName = 'UIState';
    private messageSource = new BehaviorSubject(this.getSetting());
    currentMessage = this.messageSource.asObservable();

    constructor() {
        const _initialData =  this.getSetting();
        this.setSettings(_initialData);
    }

    changeUIState(data: any) {
        this.messageSource.next(data);
        this.setSettings(data);
    }

    setSettings(data: any) {
        localStorage.setItem(this.storageName, JSON.stringify(data));
    }

    getSetting() {
        let data: any = localStorage.getItem(this.storageName);

        if (!data) {
            data = {
                leftMenuExpanded: true,
                waitData: false
            };
        } else {
            data = JSON.parse(data);
        }

        return data;
    }


}
