export class q {

    public readonly logsEnabled: boolean = false;
    public readonly port: number = 8000;

    constructor(private readonly input: string) {
        if (this.input === "-l") this.logsEnabled  = true;

        const splitInput = this.input.split(" ").filter(s => s !== "");

        if (input === "-p") throw new Error("Port must have a value");
        if (splitInput[0] === "-p")
            this.port = Number.parseInt(splitInput[1]);
        if (Number.isInteger(this.port) === false) throw new Error("Port must be an integer");
    }
}
