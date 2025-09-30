import { Component, Input, Output, EventEmitter } from '@angular/core';
import { item } from '../shared/models/item.model';
import { NgOptimizedImage, NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-item-card',
  imports: [NgOptimizedImage, NgIf, NgClass],
  templateUrl: './item-card.html',
  styleUrls: ['./item-card.css']
})
export class ItemCard {
  @Input() card_of_item!: item;
  showDetails: boolean = false;

  @Output() selectItem = new EventEmitter<item>();

  onSelectItem() {
    this.selectItem.emit(this.card_of_item);
  }
}
