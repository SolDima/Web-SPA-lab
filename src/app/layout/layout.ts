import { Component } from '@angular/core';
import { ItemCard } from '../item-card/item-card';
import { ItemsList } from '../items-list/items-list';

@Component({
  selector: 'app-layout',
  imports: [ItemCard, ItemsList],
  templateUrl: './layout.html',
  //styleUrl: './layout.css'
})
export class Layout {
  appTitle: string = 'Мій спортивний вебкаталог';
}
