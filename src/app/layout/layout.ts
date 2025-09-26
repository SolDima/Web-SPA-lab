import { Component } from '@angular/core';
import { ItemsCard } from '../items-card/items-card';
import { ItemsList } from '../items-list/items-list';

@Component({
  selector: 'app-layout',
  imports: [ItemsCard, ItemsList],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {
  appTitle: string = 'Мій спортивний вебдодаток';
}
