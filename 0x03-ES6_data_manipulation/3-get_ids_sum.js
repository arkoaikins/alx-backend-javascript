/* Function that returns the sum of all the student ids
 * It accepts a list of students a a parameter
 */

export default function getStudentIdsSum(studentlist) {
  return studentlist.reduce((idNo, currNo) => (idNo + currNo.id), 0);
}
