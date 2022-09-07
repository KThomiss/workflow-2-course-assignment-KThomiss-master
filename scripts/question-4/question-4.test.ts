import { ShoppingCart } from "./question-4";
import { bread, cheese, lettuce, milk, tomato } from "./items";

/* 1. Test that you can add an item to the cart: Use the addToCart method to add a single item, then check that methods getCostTotal, getNumberOfItems and getCart are all returning the correct values.*/

test("adding an item to the cart", () => {
  const myCart1 = new ShoppingCart();
  myCart1.addToCart(bread);
  expect(myCart1.getCostTotal()).toBe(9.25);
  expect(myCart1.getNumberOfItems()).toBe(1);
  expect(myCart1.getCart()).toContain(bread);
});

/* 2. Test that you can add an 3 separate items to the cart: Use the addToCart method to add all 3 items, then check that methods getCostTotal, getNumberOfItems and getCart are all returning the correct values.*/

test("adding multiple items to the cart", () => {
  const myCart2 = new ShoppingCart();
  myCart2.addToCart(lettuce);
  myCart2.addToCart(milk);
  myCart2.addToCart(cheese);
  expect(myCart2.getCostTotal()).toBe(27.889999999999997);
  expect(myCart2.getNumberOfItems()).toBe(3);
  expect(myCart2.getCart()).toContain(lettuce);
  expect(myCart2.getCart()).toContain(cheese);
  expect(myCart2.getCart()).toContain(milk);
});

/* 3. Test that you can't add the same item 3 times. Check that getCostTotal, getNumberOfItems and getCart are all returning the correct values.*/

test("adding the same item 3 times", () => {
  const myCart3 = new ShoppingCart();
  myCart3.addToCart(bread);
  myCart3.addToCart(bread);
  myCart3.addToCart(bread);
  expect(myCart3.getCostTotal()).toBe(9.25);
  expect(myCart3.getNumberOfItems()).toBe(1);
  expect(myCart3.getCart()).toContain(bread);
});

/* 4. Test that you can add 2 separate items with addToCart and then remove a single item with removeFromCart. Check that getCostTotal, getNumberOfItems and getCart are all returning the correct items. */

test("adding 2 separate items and removing 1", () => {
  const myCart4 = new ShoppingCart();
  myCart4.addToCart(milk);
  myCart4.addToCart(tomato);
  expect(myCart4.getCostTotal()).toBe(23.49);
  expect(myCart4.getNumberOfItems()).toBe(2);
  expect(myCart4.getCart()).toContain(milk);
  expect(myCart4.getCart()).toContain(tomato);
  myCart4.removeFromCart(tomato);
  expect(myCart4.getCostTotal()).toBe(19.99);
  expect(myCart4.getNumberOfItems()).toBe(1);
  expect(myCart4.getCart()).toContain(milk);
});
