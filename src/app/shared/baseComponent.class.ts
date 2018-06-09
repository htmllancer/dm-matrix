import { OnDestroy, OnInit } from '@angular/core';
import { ConfirmationService, Message} from 'primeng/components/common/api';
import { Observable, Observer } from 'rxjs';

export class BaseComponentClass implements OnInit, OnDestroy {

    isDirty: Observable<boolean> | Promise<boolean> | boolean;
    isLoading: Observable<boolean> | Promise<boolean> | boolean;

    constructor(private confirmationService: ConfirmationService) {
        this.isDirty = false;
        this.isLoading = true;
    }

    ngOnInit() {

    }

    ngOnDestroy() {

    }

    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {

        if (!this.isDirty) {
            return true;
        }

        return Observable.create((observer: Observer<boolean>) => {
            this.confirmationService.confirm({
                key: 'dirtyConfirmation',
                message: 'You have unsaved changes. Are you sure you want to leave this page?',
                header: 'Attention',
                accept: () => {
                    observer.next(true);
                    observer.complete();
                },
                reject: () => {
                    observer.next(false);
                    observer.complete();
                }
            });
        });

    }

}