/* Function that returns a new ArrayBuffer with an Int8 value at a specific position
 * It accpets three arguments:length(Number),postion(Number) and value(Number).
 * Id adding the value is not possible the error Position outside rage is thrown
 */

export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buff = new ArrayBuffer(length);
  const type = new DataView(buff);
  type.setInt8(position, value);
  return type;
}
