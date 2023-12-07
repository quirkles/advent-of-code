import {describe, expect, test} from '@jest/globals';
import {main as first} from './first';
import {main as second} from './second';
import {input} from "./data";

describe('day one', () => {
    describe('step one', () => {
        test('get total', () => {
            expect(first('12 red, 13 green, 14 blue', input)).toBe(2317);
        });
    })
    describe('step two', () => {
        test('get total', () => {
            expect(second(input)).toBe(74804);
        });
    })
});
