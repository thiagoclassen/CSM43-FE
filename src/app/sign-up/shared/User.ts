export class User {

    id: number;
    name: string;
    userName: string;
    password: string;
    permissionLevel: number;

    constructor(id: number = null, userName?: string, password?: string, name?: string, permissionLevel?: number) {

        this.id = id;
        this.userName = userName;
        this.password = password;
        this.name = name;
        this.permissionLevel = permissionLevel;

    }

}
