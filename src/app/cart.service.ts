import { Injectable } from '@angular/core';
import { Product, products} from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

   items: Product[] = [];

   addToCart(product:Product)
   {
     this.items.push(product);
     window.alert('Your product has been added to the cart!');
   }

   getItems()
   {
    return this.items;
   }

   clearCart(product:Product)
   {
     this.items = [];
     return this.items;
   }
}
