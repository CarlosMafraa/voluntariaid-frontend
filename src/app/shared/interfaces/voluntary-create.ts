import {TipoSanguineo} from '../enums/tipo-sanguineo';
import {SituacaoSaude} from '../enums/situacao-saude';

export interface VoluntaryCreate {
  cpf: string;
  passaporte: string;
  nomeCompleto: string;
  dataNascimento: string;
  telefone: string;
  email: string;
  tipoSanguineo: TipoSanguineo;
  profissao: string;
  anosExperiencia: number;
  situacaoSaude: SituacaoSaude;
}
