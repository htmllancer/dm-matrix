import {UIShareService} from '@app/core/shell/shell.ui-service';
import {OnInit} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class ShellBaseUIClass implements OnInit {

    UIData: BehaviorSubject<any>;
    test: any;

    constructor(private uiDataService: UIShareService) {
        this.UIData = new BehaviorSubject({});
    }

    ngOnInit() {
        this.uiDataService.currentMessage.subscribe(data => this.UIData.next(data));

        this.UIData.subscribe((changes) => {
            this.uiDataService.setSettings(changes);
        });

    }

}
