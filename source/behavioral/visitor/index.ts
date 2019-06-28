import { IElement, Visitor } from "./interfaces";

function bonusVisitor(employee: Employee) {
    if (employee instanceof Manager)
        employee.bonus = employee.salary * 2;
    if (employee instanceof Developer)
        employee.bonus = employee.salary;
}

class Employee implements IElement {
    bonus = 0;

    constructor(public salary: number) {
        this.salary = salary;
    }

    accept(visitor: Function) {
        visitor(this);
    }
}

class Manager extends Employee {
    constructor(salary: number) {
        super(salary);
    }
}

class Developer extends Employee {
    constructor(salary: number) {
        super(salary);
    }
}

export {
    Developer,
    Manager,
    bonusVisitor
};