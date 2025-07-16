import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatIcon} from '@angular/material/icon';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [
    MatButton,
    MatIcon,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {

}
