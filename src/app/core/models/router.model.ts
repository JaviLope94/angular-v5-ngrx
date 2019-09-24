import { Params, RouterStateSnapshot, Data } from '@angular/router';

export interface RouteBasicData {
    url: string;
    params?: Params;
    queryParams?: Params;
    data?: Data;
    breadcrumb?: Array<Breadcrumb>;
}

export interface Breadcrumb {
    path: string;
    params?: Params;
    data?: Data;
}
// tslint:disable-next-line: no-empty-interface
export interface RouterStoreStateUrl extends RouteBasicData { }

// tslint:disable-next-line: no-empty-interface
export interface RouterPreviousStateUrl extends RouteBasicData { }


