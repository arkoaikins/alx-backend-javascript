/* Function that returns a string of all the set values that start with a specific string
 * Accepts two arguments: a set(Set) and startString(String)
 * When a value starts with startString  it only append the rest of the
 * string. The string contains all the values of the set seperated by -
 */

export default function cleanSet(set, startString) {
  if (startString === '') return '';
  let result = '';

  for (const value of set) {
    if (value.startsWith(startString)) {
      result += `${value.slice(startString.length)}-`;
    }
  }

  return result.slice(0, -1); // Remove the trailing hyphen
}
