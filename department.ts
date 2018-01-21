export class Department {
    id: number;
    protected name: string;
    readonly count: number = 10;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    get deptid() { return this.id }

    set deptid(id: number) {
        this.id = id;
    } 

}