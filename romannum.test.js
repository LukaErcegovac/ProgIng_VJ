const arabicToRoman = require('./romannum')

describe('roman numerals test suite', () => {

    it('Should return I for 1', () => {
        expect(arabicToRoman(1)).toBe("I")
    }) 

    it('Should return II for 2', () => {
        expect(arabicToRoman(2)).toBe("II")
    }) 

    it('Should return III for 3', () => {
        expect(arabicToRoman(3)).toBe("III")
    }) 

    it('Should return IV for 4', () => {
        expect(arabicToRoman(4)).toBe("IV")
    }) 

    it('Should return V for 5', () => {
        expect(arabicToRoman(5)).toBe("V")
    }) 

    it('Should return VI for 6', () => {
        expect(arabicToRoman(6)).toBe("VI")
    }) 

    it('Should return VII for 7', () => {
        expect(arabicToRoman(7)).toBe("VII")
    }) 

    it('Should return IX for 9', () => {
        expect(arabicToRoman(9)).toBe("IX")
    }) 

    it('Should return X for 10', () => {
        expect(arabicToRoman(10)).toBe("X")
    }) 

    it('Should return XI for 11', () => {
        expect(arabicToRoman(11)).toBe("XI")
    }) 

    it('Should return XV for 15', () => {
        expect(arabicToRoman(15)).toBe("XV")
    }) 

    it('Should return XIII for 13', () => {
        expect(arabicToRoman(13)).toBe("XIII")
    }) 

    it('Should return CMXCIX for 99', () => {
        expect(arabicToRoman(99)).toBe("XCIX")
    }) 

    it('Should return CMXCIX for 999', () => {
        expect(arabicToRoman(999)).toBe("CMXCIX")
    }) 

    it('Should return MCI for 1101', () => {
        expect(arabicToRoman(1101)).toBe("MCI")
    }) 

    it('Should return MMMCI for 3101', () => {
        expect(arabicToRoman(3101)).toBe("MMMCI")
    }) 

}) 