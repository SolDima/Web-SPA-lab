import { Component } from '@angular/core';
import { ItemCardComponent } from '../item-card/item-card';
import { ItemsListComponent } from '../items-list/items-list';

@Component({
  selector: 'app-layout',
  imports: [ItemCardComponent, ItemsListComponent],
  templateUrl: './layout.html',
  //styleUrl: './layout.css'
})
export class Layout {
  appTitle: string = 'Мій спортивний вебдодаток';
}
