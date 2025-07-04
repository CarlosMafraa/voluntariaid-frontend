import {Component, inject, OnInit, signal} from '@angular/core';
import {MissionForm} from '../mission-form/mission-form';
import {VoluntaryResponse} from '../../../shared/interfaces/voluntary-response';
import {MissionResponse} from '../../../shared/interfaces/mission-response';
import {ActivatedRoute} from '@angular/router';
import {VoluntaryService} from '../../../services/voluntary/voluntary-service';
import {MissionService} from '../../../services/mission/mission-service';

@Component({
  selector: 'app-mission-details',
  imports: [
    MissionForm
  ],
  templateUrl: './mission-details.html',
  styleUrl: './mission-details.scss'
})
export class MissionDetails  implements OnInit {
  public mission = signal<MissionResponse| undefined>(undefined);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private service: MissionService = inject(MissionService)

  ngOnInit() {
    this.getId();
  }

  private getId(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getById(Number(id));
    }
  }

  public getById(mission_id: number): void {
    this.service.getByIdMission(mission_id).then(res => {
      console.log(res);
      this.mission.set(res)
    }).catch((error) => {
      console.log(error);
    }).finally(() => {

    })
  }

}
