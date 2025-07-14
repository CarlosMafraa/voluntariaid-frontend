import { Component } from '@angular/core';
import {Home} from './modules/home/home';
import {Menu} from './modules/menu/menu';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Home, Menu, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Sistema de Voluntariado';
}
