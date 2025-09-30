import { Component, OnInit } from '@angular/core';
import { item } from '../shared/models/item.model';
import { ItemCard } from '../item-card/item-card';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-items-list',
  imports: [ItemCard, NgFor, FormsModule],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css'],
})
export class ItemsList implements OnInit {
  searchTerm: string = "";
  itemslist: item[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.itemslist = this.dataService.getItems();
  }

  get filteredItems(): item[] {
    if (!this.searchTerm.trim()) {
      return this.itemslist;
    }
    return this.itemslist.filter(el =>
      el.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      el.shortDescription.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onItemSelected(selected: item) {
    console.log("Обраний товар:", selected);
  }
}
