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
      name: "Гантеля 2кг",
      image: "https://stok.top/image/cache/catalog/products/ganteli/sport/ganteli-dlya-fitnesu-2sht-po-1-5kg-perto-00887-blakitni-00887-700x700.jpg",
      description: "Щоб був біцепс як у Арнольда",
      awgPrice: 100
    },
    {
      id: 2,
      name: "Бігова доріжка",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcontent2.rozetka.com.ua%2Fgoods%2Fimages%2Fbig%2F302449882.jpg&f=1&nofb=1&ipt=cd13fbce40886f1256c7f40a8f0aeb2e8c67305d9424ef27a464bb97de24f232",
      description: "Щоб бігати, не виходячи з хати",
      awgPrice: 1000
    },
    {
      id: 3,
      name: "Гантелі регульовані",
      image: "https://images.prom.ua/6199802815_w1280_h640_6199802815.jpg",
      description: "Щоб звіряти вагу кавуна на базарі",
      awgPrice: 1000
    },
  ];
}
