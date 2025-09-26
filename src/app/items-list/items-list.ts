import { Component } from '@angular/core';
import { ItemsCard } from '../items-card/items-card';
import { Item } from '../shared/models/item.model';

@Component({
  selector: 'app-items-list',
  imports: [ItemsCard],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css'
})
export class ItemsList {

}
