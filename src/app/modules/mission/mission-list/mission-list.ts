import {Component, inject, OnInit, signal} from '@angular/core';
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
export class MissionList implements OnInit {
  public data = signal<MissionResponse []>([]);
  public displayedColumns = ['id', 'voluntario', 'periodo', 'cidade', 'avaliacao', 'acoes']
  protected service: MissionService = inject(MissionService);
  public totalElements = signal<number>(100);
  public pageSize = signal<number>(10);
  public pageIndex = signal<number>(0);
  public pageSizeOptions = signal<number[]>([5, 10, 25, 100]);

  ngOnInit() {
    this.list();

  }

  public list(){
    this.getMission(this.pageIndex(), this.pageSize());
  }

  public deleteMission(mission_id: number): void {
    this.service.deleteMission(mission_id).then((r) => {
      console.log(r)
    }).catch((err) => {
      console.log(err);
    }).finally(()=>{
      this.list();
    })
  }

  public onPageChange(event: PageEvent) {
    this.pageIndex.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
    this.list();
  }

  private getMission(page: number, size: number): void {
    this.service.getMission(page, size).then((res) => {
      this.data.set(res.content)
      console.log(res.content);
      console.log("Olá")
    }).catch((error) => {
      console.log(error);
    }).finally(() => {

    })
  }

}
