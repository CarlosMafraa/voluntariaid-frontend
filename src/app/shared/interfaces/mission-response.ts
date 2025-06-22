import {Avaliacao} from '../enums/avaliacao';
import {VoluntarioResponse} from './voluntario-response';
import {Cidade} from './cidade';

export interface MissionResponse {
  id: number;
  dataInicio: string;
  dataFim: string;
  avaliacaoFinal: Avaliacao;
  parecerCoordenador: string;
  cidade: Cidade;
  voluntario: VoluntarioResponse;
}
