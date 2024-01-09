/* Function that returns a string of all the set values that start with a specific string
 * Accepts two arguments: a set(Set) and startString(String)
 * When a value starts with startString  it only append the rest of the
 * string. The string contains all the values of the set seperated by -
 */

export default function cleanSet(set, startString) {
  const setValues = [];
  set.forEach((str) => {
    if (startString !== '') {
      if (str.startsWith(startString)) {
        setValues.push(str.slice(startString.length));
      }
    }
  });
  return setValues.join('-');
}
