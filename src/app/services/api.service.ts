import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class ApiService<T> {
  abstract get endpoint(): string;

  constructor(protected http: HttpClient) {}

  getAll(id: string | number): Observable<T> {
    let url = `${this.endpoint}/${id}.json`;

    return this.http.get<T>(url).pipe(map((res: T): T => res));
  }

  getOne(id: string | number, route?: string): Observable<T> {
    let entityRoute = route ? `/${route}` : '';
    let url = `${this.endpoint}${entityRoute}/${id}.json`;

    return this.http.get<T>(url);
  }
}
