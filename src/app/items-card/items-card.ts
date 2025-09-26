import {Component, Input} from '@angular/core';
import { Item} from '../shared/models/item.model';

@Component({
  selector: 'app-items-card',
  imports: [],
  templateUrl: './items-card.html',
  styleUrl: './items-card.css'
})

export class ItemsCardComponent {
  @Input() item!: Item; // Вхідний параметр для одного об'єкта Item
}
