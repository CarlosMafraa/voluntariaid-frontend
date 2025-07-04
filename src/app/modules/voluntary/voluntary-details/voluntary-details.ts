import {Component, inject, OnInit, signal} from '@angular/core';
import {VoluntaryForm} from '../voluntary-form/voluntary-form';
import {ActivatedRoute} from '@angular/router';
import {VoluntaryService} from '../../../services/voluntary/voluntary-service';
import {VoluntaryResponse} from '../../../shared/interfaces/voluntary-response';

@Component({
  selector: 'app-voluntary-details',
  imports: [
    VoluntaryForm
  ],
  templateUrl: './voluntary-details.html',
  styleUrl: './voluntary-details.scss'
})
export class VoluntaryDetails implements OnInit {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private service: VoluntaryService = inject(VoluntaryService)
  public voluntary = signal<VoluntaryResponse| undefined>(undefined);


  ngOnInit() {
    this.getId();
  }

  private getId(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getById(Number(id));
    }
  }

  public getById(voluntary_id: number): void {
    this.service.getByIdVoluntary(voluntary_id).then(res => {
      console.log(res);
      this.voluntary.set(res)
    }).catch((error) => {
      console.log(error);
    }).finally(() => {

    })
  }

}
