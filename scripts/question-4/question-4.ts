import { bread, cheese, lettuce, milk, tomato } from "./items";

// Create an interface called "Item" with the following variables and types:
// id: number
// name: string
// price: number

interface Item {
  id: number;
  name: string;
  price: number;
}

export class ShoppingCart {
  // Add the correct array type to cart
  /* cart = []; */

  cart: Array<Item> = [];

  // Add the correct return type
  getCostTotal(): number {
    const costTotal = this.cart.reduce((total, currentItem): number => {
      total += currentItem.price;
      return total;
    }, 0);
    return costTotal;
  }

  // Add the correct return type
  getNumberOfItems(): number {
    return this.cart.length;
  }

  // Add the correct return type
  getCart(): any {
    return [...this.cart];
  }

  // Set the parameter to be of the Item type and set the return
  //    type to be of the correct type
  addToCart(item: Item) {
    const itemExists = this.cart.find((currentItem): boolean => {
      if (currentItem.id === item.id) {
        return true;
      }
    });
    if (!itemExists) {
      this.cart.push(item);
    }
  }

  // Set the parameter to be of the Item type and set the return
  //    type to be of the correct type
  removeFromCart(item: Item) {
    const newCart = this.cart.filter((currentItem): boolean => {
      if (currentItem.id !== item.id) {
        return true;
      }
    });
    this.cart = [...newCart];
  }
}

// Examples, feel free to delete
/* const myCart = new ShoppingCart();
myCart.addToCart(bread);
myCart.removeFromCart(bread); */
