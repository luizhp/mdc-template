import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable(
    // {
    //     providedIn: 'root'
    // }
)
export class DrawerLayoutService {

    openDrawer$ = new Subject<boolean>();
    closeDrawer$ = new Subject<boolean>();
    toggleDrawer$ = new Subject<boolean>();

    open() {
        this.openDrawer$.next(true);
    }

    close() {
        this.closeDrawer$.next(true);
    }

    toggle() {
        this.toggleDrawer$.next(true);
    }

}