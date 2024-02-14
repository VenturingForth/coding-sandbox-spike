import {describe, expect, test} from '@jest/globals';
import {isBiggerThanTen, sayHello, sayGoodbye} from '../index.ts';

describe('isBiggerThanTen module', ()=>{
    test('Returns true if number greater than 10, false if not', () => {
        expect(isBiggerThanTen(15)).toBe(true);
        expect(isBiggerThanTen(2)).toBe(false);
    })
})
describe('Greetings', () => {
    test('Says Hello and Goodbye if fed correct datatypes', () => {
        expect(sayHello({name: "Joshua", id: "12"})).toBe("Hello Joshua");
        expect(sayGoodbye({name: "Joshua", id: 12})).toBe("Goodbye Joshua");
    })
    test('Returns error if fed incorrect datatypes', () => {
        expect(sayHello({name: true, id: 12})).not.toBe("Hello true");
    })
})