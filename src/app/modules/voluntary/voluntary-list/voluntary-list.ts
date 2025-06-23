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
    MatButton

  ],
  templateUrl: './voluntary-list.html',
  styleUrl: './voluntary-list.scss'
})
export class VoluntaryList implements OnInit {
  protected readonly data: WritableSignal<VoluntaryResponse[]> = signal([])
  protected service: VoluntaryService = inject(VoluntaryService);
  public displayedColumns: string[] = ['id', 'nomeCompleto', 'idade', 'situacaoSaude', 'acoes'];

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

  public visualizar(item: VoluntaryResponse): void {

  }

  public excluir(item_id: number): void {
    console.log('Excluir:', item_id);
    // Implemente a lógica de exclusão aqui
  }
}
