
import { RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStoreStateUrl } from '../models/router.model';


export class CustomSerializer
  implements RouterStateSerializer<RouterStoreStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStoreStateUrl {
    let route = routerState.root;
    const breadcrumb = [];

    while (route.firstChild) {
      route = route.firstChild;
      const NEW_ROUTE = Object.assign({}, route.firstChild);
      if (Object.keys(NEW_ROUTE).length) {
        const PATH = NEW_ROUTE.url;
        const DATA = NEW_ROUTE.data;
        const PARAMS = NEW_ROUTE.params;
        if (PATH.length) {
          breadcrumb.push({ path: PATH[0].path, params: PARAMS, data: DATA });
        }
      }
    }

    const { url, root: { queryParams } } = routerState;
    const { params, data } = route;

    return { url, params, queryParams, data, breadcrumb };
  }
}

