/* Function that returns a string of all the set values that start with a specific string
 * Accepts two arguments: a set(Set) and startString(String)
 * When a value starts with startString  it only append the rest of the
 * string. The string contains all the values of the set seperated by -
 */

export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  const setValues = Array.from(set)
    .filter((str) => str && str.startsWith(startString))
    .map((str) => str.slice(startString.length));

  return setValues.join('-');
}
