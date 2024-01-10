export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
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
  