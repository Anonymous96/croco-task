import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, share } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ProviderResponse, Providers } from '../models/IProviders.model';
import { SlotsByProvider, SlotsResponse } from '../models/ISlots.model';
import { Category, CategoryResponse } from '../models/ICategory.model';

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
    const params = new HttpParams().set('include', 'games');
    return this.http
      .get<CategoryResponse>(`${this.baseUrl}/v2/slot/categories`, { params })
      .pipe(
        share(),
        map((items) => items?.data)
      );
  }

  getDesktopCategories(): Observable<Category[]> {
    return this.getCategories().pipe(
      map((res) => res.filter((item) => item.platform !== 'mobile'))
    );
  }
}
