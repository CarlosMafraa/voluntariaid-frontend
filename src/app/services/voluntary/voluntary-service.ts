import {inject, Injectable, signal} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';
import {firstValueFrom, lastValueFrom} from 'rxjs';
import {VoluntaryResponse} from '../../shared/interfaces/voluntary-response';
import {VoluntaryCreate} from '../../shared/interfaces/voluntary-create';
import {PageResponse} from '../../shared/interfaces/page-response';

@Injectable({
  providedIn: 'root'
})
export class VoluntaryService {
  private http:HttpClient = inject(HttpClient)
  private apiUrl = signal(`${environment.apiUrl}/voluntarios`);

  public createVoluntary(voluntary: VoluntaryCreate): Promise<VoluntaryResponse>{
    return firstValueFrom(this.http.post<VoluntaryResponse>(this.apiUrl(), voluntary)).then(r => (r));
  }

  public getByIdVoluntary(voluntary_id: number): Promise<VoluntaryResponse> {
    return firstValueFrom(this.http.get<VoluntaryResponse>(`${this.apiUrl()}/${voluntary_id}`)).then(r => (r));
  }

  public getVoluntary(page: number, size: number): Promise<PageResponse<VoluntaryResponse>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return firstValueFrom(
      this.http.get<PageResponse<VoluntaryResponse>>(this.apiUrl(), { params })
    );
  }

  public getVoluntarios(): Promise<VoluntaryResponse[]> {
    return firstValueFrom(this.http.get<VoluntaryResponse[]>(`${this.apiUrl()}/`)).then(r => (r));
  }



  public deleteVoluntary(voluntary_id: number): Promise<VoluntaryResponse> {
    return firstValueFrom(this.http.delete<VoluntaryResponse>(`${this.apiUrl()}/${voluntary_id}`)).then(r => (r))
  }
}
