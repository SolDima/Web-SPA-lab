import { Component } from '@angular/core';
import { item } from '../shared/models/item.model';
import { ItemCard } from '../item-card/item-card';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-items-list',
  imports: [ItemCard, NgFor],
  templateUrl: './items-list.html',
})
export class ItemsList {

  // Масив товарів
  ItemsList: item[] = [
    {
      id: 1,
      name: 'Смартфон',
      description: 'Потужний смартфон з гарною камерою.',
      image: '/images/smartphone.jpg',
      awgPrice: 15999
    },
    {
      id: 2,
      name: 'Ноутбук',
      description: 'Легкий та продуктивний ноутбук для роботи та навчання.',
      image: '/images/laptop.jpg',
      awgPrice: 32999
    },
    {
      id: 3,
      name: 'Навушники',
      description: 'Бездротові навушники з шумозаглушенням.',
      image: '/images/headphones.jpg',
      awgPrice: 4599
    }
  ];
}
