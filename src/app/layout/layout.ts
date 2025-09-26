import { Component } from '@angular/core';
import { ItemsCardComponent } from '../items-card/items-card';
import { ItemsListComponent } from '../items-list/items-list';

@Component({
  selector: 'app-layout',
  imports: [ItemsCardComponent, ItemsListComponent],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {
  appTitle: string = 'Мій спортивний вебдодаток';
}
