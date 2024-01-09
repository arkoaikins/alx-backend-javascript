/* Function that returns an array of ids from a list of objects
 * It takes one argument which is an array of objects
 * If argument is not an array the function returns an empty array
 */

export default function getListStudentIds(studentslist) {
  return Array.isArray(studentslist) ? studentslist.map(({ id }) => id) : [];
}
