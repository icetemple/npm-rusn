import { assertEquals } from 'https://deno.land/std@0.104.0/testing/asserts.ts'
import { rusPluralize } from '../rusn.mjs'

const Jars = ['банка', 'банки', 'банок']
const firstFormNumbers = [
    1, 101, 201, 301, 401, 501, 601, 701, 801, 901,
    21, 31, 41, 51, 61, 71, 81, 91,
    121, 131, 141, 151, 161, 171, 181, 191,
]
const secondFormNumbers = [
    2, 3, 4,
    22, 23, 24,
    102, 103, 104,
]
const thirdFormNumbers = [
    5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    25, 26, 27, 28, 29, 105, 106, 107, 108, 109, 110, 111,
    112, 113, 114, 115, 116, 117, 118, 119, 120,
]
const allNumbers = firstFormNumbers.concat(secondFormNumbers, thirdFormNumbers)

Deno.test('returns first form', () => {
    for (let number of firstFormNumbers) {
        assertEquals(rusPluralize(number, Jars), Jars[0])
    }
})

Deno.test('returns second form', () => {
    for (let number of secondFormNumbers) {
        assertEquals(rusPluralize(number, Jars), Jars[1])
    }
})

Deno.test('returns third form', () => {
    for (let number of thirdFormNumbers) {
        assertEquals(rusPluralize(number, Jars), Jars[2])
    }
})

Deno.test('returns forms value if type of variable is string', () => {
    for (let number of allNumbers) {
        assertEquals(rusPluralize(number, Jars[0]), Jars[0])
        assertEquals(rusPluralize(number, Jars[1]), Jars[1])
        assertEquals(rusPluralize(number, Jars[2]), Jars[2])
    }
})
