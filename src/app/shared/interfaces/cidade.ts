import {Pais} from './pais';

export interface Cidade {
  id: number;
  nome: string;
  pais: Pais;
}
