import {describe, expect, it} from "vitest";
import {Args} from "./args";

// TODO: port format validation
// TODO: dossier /path
// TODO: dossier by default . (current)
// TODO: dossier format validation
// TODO: -l -p
// TODO: -p -l
describe("Args", () => {

    myapp pos1 pos2 [options...]

    const args = new Args("MyAppName", 'description');
    args.addBooleanOption('-l', '--logs-enabled' "logs enabled", false,'enable logs');
    args.addIntegerOption('-p', "port", 8000, 'define port');

    args.printHelp();

    args.parse(input);

    args.boolValue("logs enabled"); // true / false
    args.integerValue("port"); // 8081




    describe("logs", () => {
        it("should be disabled when log flag absent", () => {
            const args = new Args("");

            expect(args.logsEnabled).toBe(false);
        });
        it("should be enabled when log flag present", () => {
            const args = new Args("-l");

            expect(args.logsEnabled).toBe(true);
        });
    })


    describe("port", () => {
        it("should be 8000 when port flag absent", () => {
            const args = new Args("");

            expect(args.port).toBe(8000);
        });
        it("should be 8080 with '-p 8080'", () => {
            const args = new Args("-p 8080");

            expect(args.port).toBe(8080);
        });
        it("should be 8081 with '-p 8081'", () => {
            const args = new Args("-p 8081");

            expect(args.port).toBe(8081);
        });
        it("should throw when port flag has no value", () => {
            expect(() => new Args("-p")).toThrowError("Port must have a value");
        });
        it("should throw when port flag is not an integer", () => {
            expect(() => new Args("-p not_an_integer")).toThrowError("Port must be an integer");
        });
    });
});
