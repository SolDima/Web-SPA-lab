import { Component } from '@angular/core';
import { ItemCardComponent } from '../item-card/item-card';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-itemsDb-list',
  templateUrl: './items-list.html',
  imports: [ItemCardComponent, NgForOf],
})


export class ItemsListComponent {
}
