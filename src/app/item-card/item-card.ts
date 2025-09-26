import {Component, Input} from '@angular/core';
import { item } from '../shared/models/item.model';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-item-card',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './item-card.html',
  //styleUrl: './item-card.css'
})

export class ItemCardComponent {
  @Input() item!: item;
}
