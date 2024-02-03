import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'

interface Category {
  title: string;
  imgSrc: string;
  itemCount: number;
}

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  mockCategoryData : Category[] = [
    {
      title: "Men Clothes",
      imgSrc: "assets/men-clothes.png",
      itemCount: 24
    },
    {
      title: "Women Clothes",
      imgSrc: "assets/women.png",
      itemCount: 12
    },
    {
      title: "Accesories",
      imgSrc: "assets/acc2.png",
      itemCount: 43
    },
    {
      title: "Cotton Clothes",
      imgSrc: "assets/cotton.png",
      itemCount: 31
    },
    {
      title: "Summer Clothes",
      imgSrc: "assets/summer.png",
      itemCount: 26
    }, {
      title: "Wedding Clothes",
      imgSrc: "assets/wedding.png",
      itemCount: 52
    }, {
      title: "Spring Collection",
      imgSrc: "assets/spring2.png",
      itemCount: 24
    }, {
      title: "Casual Clothes",
      imgSrc: "assets/casual2.png",
      itemCount: 52
    }, {
      title: "Hats",
      imgSrc: "assets/hats2.png",
      itemCount: 26
    }

  ]

}
