import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, share, throwError } from 'rxjs';
import {
  Category,
  CategoryResponse,
  ProviderResponse,
  Providers,
  SlotsByProvider,
  SlotsResponse,
} from '../models/slots.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SlotsServiceService {
  baseUrl = environment.serverUrl;
  constructor(private http: HttpClient) {}

  getProviders(): Observable<Providers[]> {
    const params = new HttpParams()
      .set('type', 'slot')
      .set('platform', 'desktop');
    return this.http
      .get<ProviderResponse>(`${this.baseUrl}`, { params })
      .pipe(map((items) => items?.data));
  }

  getSlotsByProvider(provider: string): Observable<SlotsByProvider> {
    return this.http
      .get<SlotsResponse>(`${this.baseUrl}/v2/slot/providers/${provider}`)
      .pipe(
        share(),
        map((items) => items?.data)
      );
  }

  getCategories(): Observable<Category[]> {
    return this.http
      .get<CategoryResponse>(`${this.baseUrl}/v2/slot/categories?include=games`)
      .pipe(
        share(),
        map((items) => items?.data)
      );
  }
}
