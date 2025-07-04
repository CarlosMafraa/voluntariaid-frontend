import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';
import {lastValueFrom} from 'rxjs';
import {Cidade} from '../../shared/interfaces/cidade';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private http:HttpClient = inject(HttpClient)
  private apiUrl = signal(`${environment.apiUrl}/cidades`);


  public getCity(): Promise<Cidade[]>{
    return lastValueFrom(this.http.get<Cidade[]>(`${this.apiUrl()}`))
  }
}
