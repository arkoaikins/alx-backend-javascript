export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
  }
  
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  class TeacherImpl implements Teacher {
    readonly firstName: string;
    readonly lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
  
    constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, otherAttributes: { [propName: string]: any }) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullTimeEmployee = fullTimeEmployee;
      this.location = location;
  
      // Assign other attributes passed in the constructor
      for (const propName in otherAttributes) {
        if (Object.prototype.hasOwnProperty.call(otherAttributes, propName)) {
          this[propName] = otherAttributes[propName];
        }
      }
    }
  }
  
  // Creating a Teacher object using the TeacherImpl class
  const teacher3 = new TeacherImpl('Fosu', 'Dane', false, 'Ontario', { contract: false });
  
  console.log(teacher3);
  
  // Creating a Director object using the TeacherImpl class
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
  };
  
  console.log(director1);
  
  // Interface for the printTeacher function
  export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  // Implementation of the printTeacher function
  export function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
  }
  
  // Example usage of printTeacher function
  console.log(printTeacher('John', 'Doe')); 
  