import {UIShareService} from '@app/core/shell/shell.ui-service';
import {OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

interface IUIScope {
    leftMenuExpanded: boolean;
    waitData: boolean;
}

export class ShellBaseUIClass implements OnInit {

    UIData$: BehaviorSubject<any>;
    UIScope: IUIScope;

    constructor(private uiDataService: UIShareService) {
        this.UIData$ = new BehaviorSubject({});
        this.UIScope = null;
    }

    ngOnInit() {
        this.uiDataService.currentMessage.subscribe(data => this.UIData$.next(data));


        this.UIData$.subscribe((changes) => {
            this.UIScope = changes;
            this.uiDataService.setSettings(changes);
        });

    }

}
