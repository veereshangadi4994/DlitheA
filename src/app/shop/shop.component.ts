import { Component, OnInit } from '@angular/core';
import { Shop } from '../shop';
import { ShopserviceService } from '../shopservice.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  shops: Shop[] = [];
  constructor(private shopservice: ShopserviceService) {}

  ngOnInit(): void {
    const shopssObservable = this.shopservice.getShopss();
    shopssObservable.subscribe((shopsData: Shop[]) => {
      this.shops = shopsData;
    });
  }
  onclick() {}
}
