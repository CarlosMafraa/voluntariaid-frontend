import {TipoSanguineo} from '../enums/tipo-sanguineo';
import {SituacaoSaude} from '../enums/situacao-saude';
import {MissionResponse} from './mission-response';

export interface VoluntaryResponse {
  id: number;
  cpf: string;
  passaporte: string;
  nomeCompleto: string;
  dataNascimento: string;
  idade: number;
  telefone: string;
  email: string;
  tipoSanguineo: TipoSanguineo;
  profissao: string;
  anosExperiencia: number;
  situacaoSaude: SituacaoSaude;
  missoes?: MissionResponse[];
}
