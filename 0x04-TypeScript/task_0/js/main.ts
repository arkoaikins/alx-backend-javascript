interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Peter",
    lastName: "Ganyo",
    age: 24,
    location: "Mpintsin"
}

const student2: Student = {
    firstName: "Samuel",
    lastName: "Anderson",
    age: 23,
    location: "Nyamoransa"
}

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const body: HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach(student => {
    const row = document.createElement('tr');
    const studentName = document.createElement('td');
    const studentLocation = document.createElement('td');

    studentName.textContent = student.firstName;
    studentLocation.textContent = student.location;
    row.appendChild(studentName);
    row.appendChild(studentLocation);
    body.appendChild(row);
});

table.appendChild(body);
document.body.appendChild(table); 
