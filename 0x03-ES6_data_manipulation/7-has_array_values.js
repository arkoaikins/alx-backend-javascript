/* Function that returns a boolean if all elements in the array exist within the set
 * It accepts two arguments: a set(Set) and an array(Array)
 */

export default function hasValuesFromArray(set, array) {
  return array.every((ellExist) => set.has(ellExist));
}
