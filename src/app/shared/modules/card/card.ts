import {Component, input, InputSignal, signal} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatMiniFabButton} from '@angular/material/button';

@Component({
  selector: 'app-card',
  imports: [
    MatIcon,
    MatMiniFabButton
  ],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  public color = input<string>();
  public secColor = input<string>();
  public nameIcon = input<string>();
  public title = input<string>();
  public subtitle = input<string>();
  public list: InputSignal<string[] | undefined> = input<string[]>();
  public nameButton = input<string>();

}
