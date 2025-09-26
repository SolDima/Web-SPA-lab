import { Component } from '@angular/core';
import { Item } from '../shared/models/item.model';
import { items } from '../data/items/items';
import { ItemsCardComponent } from '../items-card/items-card';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.html',
  imports: [ItemsCardComponent],
})
export class ItemsListComponent {
  items: Item[] = items;
}
