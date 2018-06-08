import {OnDestroy, OnInit} from '@angular/core';

export class BaseComponentClass implements OnInit, OnDestroy {

    isDirty: boolean;

    constructor() {
        this.isDirty = false;
    }

    ngOnInit() {

    }

    ngOnDestroy() {

    }

    canDeactivate(): boolean {
        return !this.isDirty;
    }

}

/*
    this.confirmationService.confirm({
        message: ` Hey All, do you like PrimeNG? ${this.isDirty}`,
        header: 'Greeting',
        icon: 'fa fa-question-circle',
        accept: () => {
            console.warn('accept');
        },
        reject: () => {
            console.warn('reject');
        }
    });

 */