import {Component, computed, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiIcon, TuiIconPipe} from '@taiga-ui/core';
import {VoluntaryService} from '../../../services/voluntary/voluntary-service';
import {VoluntaryResponse} from '../../../shared/interfaces/voluntario-response';

@Component({
  selector: 'app-voluntary-list',
  imports: [
    TuiTable,
    TuiIconPipe,
    TuiIcon,
  ],
  templateUrl: './voluntary-list.html',
  styleUrl: './voluntary-list.scss'
})
export class VoluntaryList implements OnInit{
  protected readonly data: WritableSignal<VoluntaryResponse[]> = signal([])
  protected readonly columns = computed(() => {
    const items = this.data();
    return items.length > 0 ? Object.keys(items[0]) : [];
  });
  protected service: VoluntaryService = inject(VoluntaryService)

  ngOnInit() {
    this.getVoluntary();
  }

  private getVoluntary(): void {
    this.service.getVoluntary().then((res) => {
      console.log(res)
      this.data.set(res)
    }).catch((error) => {
      console.log(error);
    }).finally()
  }
}
