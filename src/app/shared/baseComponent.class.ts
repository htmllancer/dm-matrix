import {OnDestroy, OnInit} from '@angular/core';

export class BaseComponentClass implements OnInit, OnDestroy {

    isDirty: boolean;

    constructor() {
        this.isDirty = false;
    }

    ngOnInit() {
        console.warn(this.isDirty);
    }

    ngOnDestroy() {

    }

    canDeactivate(): boolean {
        return !this.isDirty;
    }

}
