/* Function that returns an array of objects who are located in a specific city
 * It accepts a list of students and a city(string) as parameters
 */

export default function getStudentsByLocation(studentlist, city) {
  return studentlist.filter((specificCity) => specificCity.location === city);
}
