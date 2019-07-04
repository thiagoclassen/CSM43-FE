export class Restaurant {

    id: string;
    name: string;
    localization: string;
    description: string;
    tables: number;
    tomorrowAvailableTables: number;
    owner: any;

    constructor(id: string = null,
        localization?: string,
        description?: string,
        name?: string,
        tables?: number,
        tomorrowAvailableTables?: number,
        owner?: any) {

        this.id = id;
        this.localization = localization;
        this.description = description;
        this.name = name;
        this.tables = tables;
        this.tomorrowAvailableTables = tomorrowAvailableTables;
        this.owner = owner;
    }

}
