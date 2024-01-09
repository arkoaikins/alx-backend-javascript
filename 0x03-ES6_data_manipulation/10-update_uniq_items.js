/* function that returns an updated map of all items with initial quality at t1
 * if accepts a map as an argument. 
 */

export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((v, k) => {
    if (v === 1) {
      map.set(k, 100);
    }
  });
}
