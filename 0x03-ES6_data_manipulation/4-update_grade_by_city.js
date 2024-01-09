/* function that returns an array of students for a specific city with their new grade
 * it accepts a list of students,a city,and new grades as parameters
 */

export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  return studentsList.filter((specificCity) => specificCity.location === city)
    .map((specificCity) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === specificCity.id);
      specificCity.grade = gradeObj ? gradeObj.grade : 'N/A'; // eslint-disable-line no-param-reassign
      return specificCity;
    });
}
