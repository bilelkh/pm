import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ProdiverService {
  constructor(private httpClient: HttpClient) {}

  readAll(pageIndex, pageSize, query): Observable<any> {
    return this.httpClient.get(
      `${environment.baseURL}/provider?pageIndex=${pageIndex}&pageSize=${pageSize}&${query}`
    );
  }

  read(id): Observable<any> {
    return this.httpClient.get(`${environment.baseURL}/provider/${id}`);
  }

  create(data): Observable<any> {
    return this.httpClient.post(environment.baseURL, data);
  }

  update(id, data): Observable<any> {
    return this.httpClient.put(`${environment.baseURL}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.httpClient.delete(`${environment.baseURL}/${id}`);
  }
}
