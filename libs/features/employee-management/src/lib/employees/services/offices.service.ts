import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Office } from '@em-web/api-interfaces';
import { map, Observable } from 'rxjs';

@Injectable()
export class OfficesService {

  constructor(private httpClient: HttpClient) { }

  getAllOffices(): Observable<string[]> {
    return this.httpClient.get<Office[]>('/api/offices')
      .pipe(map((elm) => elm.map(val => val.location)));
  }
}
