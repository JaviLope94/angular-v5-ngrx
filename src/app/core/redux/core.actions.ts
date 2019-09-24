import { RouterStateSnapshot } from '@angular/router';
import {
    RoutesRecognized,
} from '@angular/router';

/**
 * An action dispatched when the router navigates.
 */
export const ROUTER_NAVIGATION = '@ngrx/router-store/navigation';

// tslint:disable-next-line: interface-over-type-literal
export declare type RouterNavigationPayload<T> = {
    routerState: T;
    event: RoutesRecognized;
};

// tslint:disable-next-line: interface-over-type-literal
export declare type RouterNavigationAction<T = RouterStateSnapshot> = {
    type: typeof ROUTER_NAVIGATION;
    payload: RouterNavigationPayload<T>;
};

