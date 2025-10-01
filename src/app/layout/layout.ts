import { Component } from '@angular/core';
import { ItemCard } from '../item-card/item-card';
import { ItemsList } from '../items-list/items-list';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [ItemCard, ItemsList, NgOptimizedImage],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {
  appTitle: string = 'DT';
}
