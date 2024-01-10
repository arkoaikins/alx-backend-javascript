// Interfaces
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}
  
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}
  
  // Classes implementing interfaces
export const Director = class Director implements DirectorInterface {
    workFromHome(): string {
      return 'Working from home';
    }
  
    getCoffeeBreak() {
      return 'Getting a coffee break';
    }
  
    workDirectorTasks() {
      return 'Getting to director tasks';
    }
}
  
export const Teacher = class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }
  
    getCoffeeBreak() {
      return 'Cannot have a break';
    }
  
    workTeacherTasks() {
      return 'Getting to work';
    }
}
  
  // Function to create Director or Teacher instances based on salary
export function createEmployee(firstName: string, lastName: string, salary: number | string): DirectorInterface | TeacherInterface {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    
    return new Director();
  }

// New functions added
export function isDirector(employee: DirectorInterface | TeacherInterface): employee is 
DirectorInterface {
    return (employee as DirectorInterface).workDirectorTasks !== undefined;
}

export function executeWork(employee: DirectorInterface | TeacherInterface): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}  