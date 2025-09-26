import { Component } from '@angular/core';
import { item } from '../shared/models/item.model';
import { itemsDb } from '../data/items/items-db';
import { ItemCardComponent } from '../item-card/item-card';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-itemsDb-list',
  templateUrl: './items-list.html',
  imports: [ItemCardComponent, NgForOf],
})


export class ItemsListComponent {
  itemsDb: item[] = itemsDb;

}
