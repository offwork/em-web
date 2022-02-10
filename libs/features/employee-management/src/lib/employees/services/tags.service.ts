import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tag } from '@em-web/api-interfaces';
import { map, Observable } from 'rxjs';

@Injectable()
export class TagsService {

  constructor(private httpClient: HttpClient) { }

  getAllTags(): Observable<string[]> {
    return this.httpClient.get<Tag[]>('/api/tags')
      .pipe(map((elm) => elm.map(val => val.department)));
  }
}
