import { Department } from './department';

export class Employee extends Department {
    id: number;
    firstName: string;
    lastName: string;
    dob: Date;
    salary: number;
    constructor() {
        super(1, 'test');
    }
}

export let isValid: boolean = false;

export function add(num1: number, num2: number): number {
    return num1 + num2;
}