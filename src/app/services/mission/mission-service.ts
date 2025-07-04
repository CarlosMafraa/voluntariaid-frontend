import {inject, Injectable, signal} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';
import {lastValueFrom} from 'rxjs';
import {MissionCreate} from '../../shared/interfaces/mission-create';
import {MissionResponse} from '../../shared/interfaces/mission-response';
import {PageResponse} from '../../shared/interfaces/page-response';

@Injectable({
  providedIn: 'root'
})
export class MissionService {
  private http:HttpClient = inject(HttpClient)
  private apiUrl = signal(`${environment.apiUrl}/missoes`);


  public createMission(mission: MissionCreate): Promise<MissionResponse> {
    return lastValueFrom(this.http.post<MissionResponse>(this.apiUrl(), mission))
  }

  public getByIdMission(mission_id: number): Promise<MissionResponse> {
    return lastValueFrom(this.http.get<MissionResponse>(`${this.apiUrl()}/${mission_id}`)).then(r => (r))
  }

  public getMission(page: number, size: number): Promise<PageResponse<MissionResponse>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return lastValueFrom(
      this.http.get<PageResponse<MissionResponse>>(this.apiUrl(), { params })
    );
  }


  public deleteMission(mission_id: number):Promise<MissionResponse>{
    return lastValueFrom(this.http.delete<MissionResponse>(`${this.apiUrl()}/${mission_id}`))
  }
}
