import { Component } from '@angular/core';
import {Home} from './modules/home/home';
import {Menu} from './modules/menu/menu';

@Component({
  selector: 'app-root',
  imports: [Home, Menu],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'voluntariaid-frontend';
}
