import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SidenavService {

    // With this subject you can save the sidenav state and consumed later into other pages.
    public sideNavState$: Subject<boolean> = new Subject();
    public isSideNavVisible$: Subject<boolean> = new Subject();

    constructor() {
        this.sideNavState$.next(false);
        this.isSideNavVisible$.next(true);
    }

}