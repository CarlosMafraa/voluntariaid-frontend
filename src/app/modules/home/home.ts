import {Component, signal} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {Card} from '../../shared/modules/card/card';

@Component({
  selector: 'app-home',
  imports: [
    MatButton,
    MatIconModule,
    Card,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class Home {

  public listVoluntary = signal<string[]>([
    'Cadastrar novos voluntários',
    'Visualizar lista completa',
    'Gerenciar informações'
  ])
  public listMission = signal<string[]>([
    "Criar novas missões",
    "Definir local e data",
    "Organizar atividades"
  ])

}
