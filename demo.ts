import { Employee, isValid, add } from './class-demo';

let fname: string;

fname = 'Test';

let empList: Employee[] = [];

let emp: Employee = {
    id: 1, firstName: 'test',
    lastName: 'sfsdf', dob: new Date('12-Jan-2012'), salary: 2000
};

let emp1: Employee = {
    id: 2, firstName: 'test',
    lastName: 'sfsdf', dob: new Date('12-Jan-2012'), salary: 2000
};

empList.push(emp, emp1);

empList.forEach(function (emp) {
    console.log(emp);
})

empList.forEach((emp) => {
    console.log(emp)
})

for (let emp of empList) {
    console.log(emp);
}

for (let index in empList) {
    console.log(index);
}

let age: number;

let isvalid = isValid;

let dob: Date;

dob = new Date('11-Jan-2016');

let lastName;
lastName = 10;
lastName = 'hgh';
lastName = new Date('12-Jan-2017');

let unionType: string | string[];

let employeeList: string[] = [];

employeeList.push('test');
employeeList.push('abc');

console.log(employeeList);

employeeList.forEach(function (emp) {
    console.log(emp);
})

let department: any[] = [];

department.push({ name: 'IT', count: 110 });
