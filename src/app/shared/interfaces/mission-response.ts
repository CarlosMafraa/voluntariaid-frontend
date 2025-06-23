import {Avaliacao} from '../enums/avaliacao';
import {Cidade} from './cidade';
import {VoluntaryResponse} from './voluntario-response';

export interface MissionResponse {
  id: number;
  dataInicio: string;
  dataFim: string;
  avaliacaoFinal: Avaliacao;
  parecerCoordenador: string;
  cidade: Cidade;
  voluntario: VoluntaryResponse;
}
