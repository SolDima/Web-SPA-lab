
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from './layout/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Layout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'Angular';
}

/*

//deepseek
import { Component } from '@angular/core';
import { ItemsList } from './items-list/items-list';

@Component({
  selector: 'app-root',
  imports: [ItemsList],
  templateUrl: './app.html',
})
export class App {
  title = 'Мій магазин';
}
*/
