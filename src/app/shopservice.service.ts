import { Injectable } from '@angular/core';
import { Shop } from './shop';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ShopserviceService {
  constructor() {}

  shops: Shop[] = [
    {
      name: 'Orange',
      price: 'Rs-120/Kg',
      img: 'https://images.pexels.com/photos/2771926/pexels-photo-2771926.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      button: 'http://localhost:4200/Orange',
    },
    {
      name: 'Banana',
      price: 'Rs-150/Kg',
      img: 'https://images.pexels.com/photos/108059/pexels-photo-108059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      button: 'http://localhost:4200/banana',
    },
    {
      name: 'Apple',
      price: 'Rs-200/Kg',
      img: 'https://images.pexels.com/photos/2487443/pexels-photo-2487443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      button: 'http://localhost:4200/apple',
    },
    {
      name: 'Grapes',
      price: 'Rs-180/Kg',
      img: 'https://images.pexels.com/photos/5392666/pexels-photo-5392666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      button: 'http://localhost:4200/grapes',
    },
    {
      name: 'Pineapple',
      price: 'Rs-120/Kg',
      img: 'https://images.pexels.com/photos/2469772/pexels-photo-2469772.jpeg?auto=compress&cs=tinysrgb&w=600',
      button: 'http://localhost:4200/pinneapple',
    },
    {
      name: 'Mango',
      price: 'Rs-150/Kg',
      img: 'https://images.pexels.com/photos/2363345/pexels-photo-2363345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      button: 'http://localhost:4200/mango',
    },
    {
      name: 'Strawberry',
      price: 'Rs-200/Kg',
      img: 'https://images.pexels.com/photos/429807/pexels-photo-429807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      button: 'http://localhost:4200/strawberry',
    },
    {
      name: 'Guava',
      price: 'Rs-150/Kg',
      img: 'https://images.pexels.com/photos/2351813/pexels-photo-2351813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      button: 'http://localhost:4200/guava',
    },
  ];
  public getShopss(): any {
    const shopsObservable = new Observable((observer) => {
      observer.next(this.shops);
    });

    return shopsObservable;
  }
}
