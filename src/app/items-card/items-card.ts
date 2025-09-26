import {Component, Input} from '@angular/core';
import { Item } from '../shared/models/item.model';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-items-card',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './items-card.html',
  styleUrl: './items-card.css'
})

export class ItemsCardComponent {
  @Input() item!: Item;
}
