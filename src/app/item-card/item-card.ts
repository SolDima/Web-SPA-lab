import { Component, Input } from '@angular/core';
import { item } from '../shared/models/item.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-item-card',
  imports: [NgOptimizedImage],
  templateUrl: './item-card.html',
})
export class ItemCard {
  @Input() card_of_item!: item;
}
