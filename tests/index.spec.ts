import { rusNGetText } from '../src';


describe('rusNGetText()', () => {
    const Jars: [string, string, string] = ['банка', 'банки', 'банок'];
    const firstFormNumbers: number[] = [
        1, 101, 201, 301, 401, 501, 601, 701, 801, 901,
        21, 31, 41, 51, 61, 71, 81, 91,
        121, 131, 141, 151, 161, 171, 181, 191,
    ];
    const secondFormNumbers: number[] = [
        2, 3, 4,
        22, 23, 24,
        102, 103, 104,
    ];
    const thirdFormNumbers: number[] = [
        5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        25, 26, 27, 28, 29, 105, 106, 107, 108, 109, 110, 111,
        112, 113, 114, 115, 116, 117, 118, 119, 120,
    ];
    const allNumbers: number[] = firstFormNumbers.concat(secondFormNumbers, thirdFormNumbers);

    it('returns first form', () => {
        for (let number of firstFormNumbers) {
            expect(rusNGetText(number, Jars)).toBe(Jars[0]);
        }
    });

    it('returns second form', () => {
        for (let number of secondFormNumbers) {
            expect(rusNGetText(number, Jars)).toBe(Jars[1]);
        }
    });

    it('returns third form', () => {
        for (let number of thirdFormNumbers) {
            expect(rusNGetText(number, Jars)).toBe(Jars[2]);
        }
    });

    it('returns forms value if type of variable is string', () => {
        for (let number of allNumbers) {
            expect(rusNGetText(number, Jars[0])).toBe(Jars[0]);
            expect(rusNGetText(number, Jars[1])).toBe(Jars[1]);
            expect(rusNGetText(number, Jars[2])).toBe(Jars[2]);
        }
    })
});
