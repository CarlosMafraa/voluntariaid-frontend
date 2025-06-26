import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {VoluntaryService} from '../../../services/voluntary/voluntary-service';
import {VoluntaryResponse} from '../../../shared/interfaces/voluntario-response';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {RouterLink} from '@angular/router';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {TitleCasePipe} from '@angular/common';
import {MatPaginator, PageEvent} from '@angular/material/paginator';


@Component({
  selector: 'app-voluntary-list',
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    RouterLink,
    MatIconButton,
    MatIcon,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    TitleCasePipe,
    MatButton,
    MatPaginator,
  ],
  templateUrl: './voluntary-list.html',
  styleUrl: './voluntary-list.scss'
})
export class VoluntaryList implements OnInit {
  protected readonly data: WritableSignal<VoluntaryResponse[]> = signal([])
  private service: VoluntaryService = inject(VoluntaryService);
  public displayedColumns: string[] = ['id', 'nomeCompleto', 'idade', 'situacaoSaude', 'acoes'];
  public totalElements = signal<number>(100);
  public pageSize = signal<number>(10);
  public pageIndex = signal<number>(0);
  public pageSizeOptions = signal<number[]>([5, 10, 25, 100]);

  ngOnInit() {
    this.getVoluntary(this.pageIndex(), this.pageSize());
  }

  private getVoluntary(page: number, size: number): void {
    this.service.getVoluntary(page, size).then((res) => {
      this.data.set(res.content)
      console.log(res.content);
    }).catch((error) => {
      console.log(error);
    }).finally()
  }

  public visualizar(item: VoluntaryResponse): void {

  }

  public excluir(item_id: number): void {
    console.log('Excluir:', item_id);
    // Implemente a lógica de exclusão aqui
  }

  public onPageChange(event: PageEvent) {
    console.log("oii")
    this.pageIndex.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
    console.log(event.pageIndex, event.pageSize)
    this.getVoluntary(this.pageIndex(), this.pageSize());
  }
}
