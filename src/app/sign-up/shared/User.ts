export class User {

    id: number;
    name: string;
    permissionLevel: number;

    constructor(id: number, name: string, permissionLevel: number) {

        this.id = id;
        this.name = name;
        this.permissionLevel = permissionLevel;

    }

}
