/* Function that returns a map of groceries with the following items(name, quantity)
 */

export default function groceriesList() {
  const items = new Map();
  items.set('Apples', 10);
  items.set('Tomatoes', 10);
  items.set('Pasta', 1);
  items.set('Rice', 1);
  items.set('Banana', 5);

  return items;
}
