import { Component } from '@angular/core';
import { Item } from '../shared/models/item.model';
import { items } from '../data/items/items';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.html'
})
export class ItemsListComponent {
  items: Item[] = items;
}
