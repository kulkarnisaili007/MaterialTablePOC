import { Launchpad } from './launchpads';
import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class LaunchpadService {

  constructor(private http: HttpClient) { }
  private URL = "https://api.spacexdata.com/v4/landpads";

  getLaunchpads() :Observable<any[]>{
    return this.http.get(this.URL)
    // .subscribe(response => console.log(_.values(response)));
    .pipe(
      map(res => _.values(res))
    );
  }


}
