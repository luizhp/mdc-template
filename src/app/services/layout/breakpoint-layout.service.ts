import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';

import { ScreenBreakpoint } from '../../models/layouts/screen-breakpoint';

@Injectable({
    providedIn: 'root'
})
export class BreakpointLayoutService {

    public screenBreakpoint$: Subject<ScreenBreakpoint> = new Subject<ScreenBreakpoint>();

    constructor(private breakpointObserver: BreakpointObserver) {

        console.log('breakpoint constructor');
        this.breakpointObserver
            .observe([
                '(orientation: portrait)',
                '(orientation: landscape)',
                Breakpoints.XSmall,
                Breakpoints.Small,
                Breakpoints.Medium,
                Breakpoints.Large,
                Breakpoints.XLarge
            ])
            .subscribe(
                (bs: BreakpointState) =>
                    this.screenBreakpoint$.next(this._convertBreakpoint(bs))
            );

    }

    private _convertBreakpoint(bs: BreakpointState): ScreenBreakpoint {

        // Breakpoints.Handset
        //"{"matches":false,"breakpoints":{"(max-width: 599.99px) and (orientation: portrait)":false,"(max-width: 959.99px) and (orientation: landscape)":false}}"
        // Breakpoints.HandsetLandscape
        //"{"matches":false,"breakpoints":{"(max-width: 959.99px) and (orientation: landscape)":false}}"
        // Breakpoints.HandsetPortrait
        //"{"matches":false,"breakpoints":{"(max-width: 599.99px) and (orientation: portrait)":false}}"
        // Breakpoints.Tablet
        //"{"matches":false,"breakpoints":{"(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait)":false,"(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)":false}}"
        // Breakpoints.TabletLandscape
        //"{"matches":false,"breakpoints":{"(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)":false}}"
        // Breakpoints.TabletPortrait
        //"{"matches":false,"breakpoints":{"(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait)":false}}"
        // Breakpoints.Web
        //"{"matches":true,"breakpoints":{"(min-width: 840px) and (orientation: portrait)":true,"(min-width: 1280px) and (orientation: landscape)":false}}"
        // Breakpoints.WebLandscape
        //"{"matches":false,"breakpoints":{"(min-width: 1280px) and (orientation: landscape)":false}}"
        // Breakpoints.WebPortrait
        //"{"matches":true,"breakpoints":{"(min-width: 840px) and (orientation: portrait)":true}}"

        // Breakpoints.XSmall
        //"{"matches":false,"breakpoints":{"(max-width: 599.99px)":false}}"
        // Breakpoints.Small
        //"{"matches":true,"breakpoints":{"(min-width: 600px) and (max-width: 959.99px)":true}}"
        // Breakpoints.Medium
        //"{"matches":false,"breakpoints":{"(min-width: 960px) and (max-width: 1279.99px)":false}}"
        // Breakpoints.Large
        //"{"matches":false,"breakpoints":{"(min-width: 1280px) and (max-width: 1919.99px)":false}}"
        // Breakpoints.XLarge
        //"{"matches":false,"breakpoints":{"(min-width: 1920px)":false}}"
        let retorno: ScreenBreakpoint = {
            orientation: '',
            breakpoint: ''
        };

        if (bs.breakpoints['(orientation: portrait)']) retorno.orientation = 'portrait';
        if (bs.breakpoints['(orientation: landscape)']) retorno.orientation = 'landscape';

        if (bs.breakpoints[Breakpoints.XSmall]) retorno.breakpoint = 'XSmall';
        if (bs.breakpoints[Breakpoints.Small]) retorno.breakpoint = 'Small';
        if (bs.breakpoints[Breakpoints.Medium]) retorno.breakpoint = 'Medium';
        if (bs.breakpoints[Breakpoints.Large]) retorno.breakpoint = 'Large';
        if (bs.breakpoints[Breakpoints.XLarge]) retorno.breakpoint = 'XLarge';

        console.log('retorno');
        console.log(retorno);

        return retorno;
    }

}