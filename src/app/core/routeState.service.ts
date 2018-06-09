import {Injectable} from '@angular/core';
import { NavigationStart, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Injectable()
export class RoutingState {
    private history: string[];

    constructor(
        private router: Router
    ) {
        this.history = [];
    }

    public loadRouting(): void {
        this.router.events
            .pipe(filter(event => event instanceof NavigationStart))
            .subscribe(({url}: NavigationStart) => {
                this.history = [...this.history, url];
            });
    }

    public getHistory(): string[] {
        return this.history;
    }

    public getPreviousUrl(): string {
        return this.history[this.history.length - 2] || '/index';
    }

    public resetHistory() {
        this.history = [];
    }
}
