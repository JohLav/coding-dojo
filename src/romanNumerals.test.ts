import {it, describe, expect} from "vitest";

type Roman = string;

const I = "I";
const V = "V";
const X = "X";

function toRoman(arabic: number): Roman {
    if(arabic > 9) return  X + I.repeat(arabic - (9 + 1));
    if(arabic === 9) return I + X;
    if(arabic > 4) return  V + I.repeat(arabic - (4 + 1));
    if(arabic === 4) return  I + V;
    if(arabic) return I.repeat(arabic);

    return "";
}

describe("Roman Numerals", () => {
    it.each([
        {arabic : 0, roman : ""},
        {arabic : 1, roman : "I"},
        {arabic : 2, roman : "II"},
        {arabic : 3, roman : "III"},
        {arabic : 4, roman : "IV"},
        {arabic : 5, roman : "V"},
        {arabic : 6, roman : "VI"},
        {arabic : 7, roman : "VII"},
        {arabic : 9, roman : "IX"},
        {arabic : 10, roman : "X"},
        {arabic : 11, roman : "XI"},
    ])("should convert $arabic to $roman", ({arabic, roman}) => {
        expect(toRoman(arabic)).toBe(roman);
    })

//     TODO: 9 => IX
//     TODO: 11 => XI
//     TODO: 15 => XV
//     TODO: 19 => XIX
//     TODO: 20 => XX
//     TODO: 50 => L
//     TODO: 100 => C
//     TODO: 500 => D
//     TODO: 1000 => M
});
