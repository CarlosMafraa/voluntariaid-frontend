import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';
import {lastValueFrom} from 'rxjs';
import {VoluntaryResponse} from '../../shared/interfaces/voluntario-response';
import {VoluntaryCreate} from '../../shared/interfaces/voluntary-create';

@Injectable({
  providedIn: 'root'
})
export class VoluntaryService {
  private http:HttpClient = inject(HttpClient)
  private apiUrl = signal(`${environment.apiUrl}/voluntarios`);

  public createVoluntary(voluntary: VoluntaryCreate): Promise<VoluntaryResponse>{
    return lastValueFrom(this.http.post<VoluntaryResponse>(this.apiUrl(), voluntary)).then(r => (r));
  }

  public getByIdVoluntary(voluntary_id: number): Promise<VoluntaryResponse> {
    return lastValueFrom(this.http.get<VoluntaryResponse>(`${this.apiUrl()}/${voluntary_id}`)).then(r => (r));
  }

  public getVoluntary(): Promise<VoluntaryResponse[]> {
    return lastValueFrom(this.http.get<VoluntaryResponse[]>(this.apiUrl()));
  }

  public deleteVoluntary(voluntary_id: number): Promise<VoluntaryResponse> {
    return lastValueFrom(this.http.delete<VoluntaryResponse>(`${this.apiUrl()}/${voluntary_id}`)).then(r => (r))
  }
}
