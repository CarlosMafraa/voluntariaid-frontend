import {Component, inject, signal} from '@angular/core';
import {MatButton, MatIconButton} from '@angular/material/button';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from '@angular/material/table';
import {RouterLink} from '@angular/router';
import {DatePipe, TitleCasePipe} from '@angular/common';
import {MissionResponse} from '../../../shared/interfaces/mission-response';
import {MatIcon} from '@angular/material/icon';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MissionService} from '../../../services/mission/mission-service';


@Component({
  selector: 'app-mission-list',
  imports: [
    MatButton,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatIcon,
    MatIconButton,
    MatRow,
    MatRowDef,
    MatTable,
    RouterLink,
    TitleCasePipe,
    DatePipe,
    MatHeaderCellDef,
    MatPaginator
  ],
  templateUrl: './mission-list.html',
  styleUrl: './mission-list.scss'
})
export class MissionList {
  public data = signal<MissionResponse []>([]);
  public displayedColumns =['id', 'voluntario', 'periodo', 'cidade', 'avaliacao','acoes']
  protected service: MissionService = inject(MissionService);
  public totalElements = signal<number>(100);
  public pageSize = signal<number>(10);
  public pageIndex = signal<number>(0);
  public pageSizeOptions = signal<number[]>([5, 10, 25, 100]);

  public deleteMission(mission_id: number) : void {

  }

  public onPageChange(event: PageEvent) {
    this.pageIndex.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
    this.getMission(this.pageIndex(), this.pageSize());
  }

  private getMission(page: number, size: number): void {
    this.service.getMission(page, size).then((res) => {
      this.data.set(res.content)
    }).catch((error) => {
      console.log(error);
    }).finally(() => {

    })
  }

}
