export default function createIteratorObject(report) {
  const employeeArray = [];
  for (const employees of Object.values(report.allEmployees)) {
    for (const employee of employees) {
      employeeArray.push(employee);
    }
  }
  return employeeArray;
}
