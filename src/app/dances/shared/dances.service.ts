import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { SetDance } from './models/set-dance.model';

/**
 * Service in charge of fetching Dances data.
 */
@Injectable()
export class DancesService {

  private source = './assets/data/set-dances';

  constructor (private http: Http) {}

  /**
   * Fetches dances list.
   */
  getDancesList(): Observable<SetDance[]> {
    return this.http.get(`${this.source}/index.json`)
                    .map((res: Response) => res.json() as SetDance[])
                    .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
