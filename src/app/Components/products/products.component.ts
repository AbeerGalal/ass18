import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: { id: number; name: string; price: number; imgURL: string }[] = [
    {
      id: 1,
      name: 'Lipgloss',
      price: 10000,
      imgURL:
               "./assets/images/lipgloss.png"},
    {
      id: 2,
      name: 'Concealer',
      price: 20000,
      imgURL:
        "./assets/images/concealer.jpeg",
    },
    {
      id: 3,
      name: 'Lipstick',
      price: 30000,
      imgURL: "./assets/images/lipstick.jpeg"
      },
    {
      id: 4,
      name: 'Eyeshado',
      price: 40000,
      imgURL:
        "./assets/images/eyeshado.jpeg",
    },
    {
      id: 5,
      name: 'Highlighter',
      price: 50000,
      imgURL:
        "./assets/images/highlighter.jpg"
    },
  ];
}
