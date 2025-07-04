import {Avaliacao} from '../enums/avaliacao';

export interface MissionCreate {
  dataInicio: string;
  dataFim: string;
  avaliacaoFinal: Avaliacao;
  parecerCoordenador: string;
  cidadeId: number;
  voluntarioId: number;
}
