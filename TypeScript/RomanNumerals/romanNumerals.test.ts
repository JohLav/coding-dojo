import {describe, expect, test} from "vitest";

class ArabicNumber {
    private roman: string = '';

    constructor(private arabicNumber: number) {
    }

    public toRoman(): string {

        this.applyConversion({arabic: 10, roman: 'X'});
        this.applyConversion({arabic: 5, roman: 'V'});
        this.applyConversion({arabic: 4, roman: 'IV'});
        this.applyConversion({arabic: 1, roman: 'I'});

        return this.roman;
    }

    private applyConversion(conversion: Conversion) {
        while (this.arabicNumber >= conversion.arabic) {
            this.roman += conversion.roman;
            this.arabicNumber -= conversion.arabic;
        }
    }
}

type Conversion = {
    arabic: number,
    roman: string
}

function toRoman(number: number): string {
    let roman = '';

    const conversions: Conversion[] = [
        {arabic: 10, roman: 'X'},
        {arabic: 5, roman: 'V'},
        {arabic: 4, roman: 'IV'},
        {arabic: 1, roman: 'I'},
    ];

    conversions.forEach(conversion => {
        while (number >= conversion.arabic) {
            roman += conversion.roman;
            number -= conversion.arabic;
        }
    })

    return roman;
}

describe('The Number to Roman numerals Converter', () => {
    test.each([
        [1, 'I'],
        [2, 'II'],
        [3, 'III'],
        [4, 'IV'],
        [5, 'V'],
        [6, 'VI'],
        [7, 'VII'],
        [10, 'X'],
        [11, 'XI'],
        [12, 'XII'],
        [20, 'XX'],
        [30, 'XXX'],
    ])('converts %i to %s', (number, romanNumeral) => {
        expect(new ArabicNumber(number).toRoman()).toBe(romanNumeral);
        expect(toRoman(number)).toBe(romanNumeral);
    })
});
