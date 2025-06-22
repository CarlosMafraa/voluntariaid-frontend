import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';
import {lastValueFrom} from 'rxjs';
import {MissionCreate} from '../../shared/interfaces/mission-create';
import {MissionResponse} from '../../shared/interfaces/mission-response';

@Injectable({
  providedIn: 'root'
})
export class MissionService {
  private http:HttpClient = inject(HttpClient)
  private apiUrl = signal(`${environment.apiUrl}/missoes`);


  public createMission(mission: MissionCreate): void{
    lastValueFrom(this.http.post<MissionResponse>(this.apiUrl(), mission)).then(r => (r))
  }

  public getByIdMission(mission_id: number): void{
    lastValueFrom(this.http.get<MissionResponse>(`${this.apiUrl()}/${mission_id}`)).then(r => (r))
  }

  public getMission(): void{
    lastValueFrom(this.http.get<MissionResponse[]>(this.apiUrl())).then(r => (r))
  }

  public deleteMission(mission_id: number): void{
    lastValueFrom(this.http.delete<MissionResponse>(`${this.apiUrl()}/${mission_id}`)).then(r => (r))
  }
}
