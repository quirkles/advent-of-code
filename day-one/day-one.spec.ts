import {describe, expect, test} from '@jest/globals';
import {main as first} from './first';
import {main as second} from './second';
import {input} from "./data";

describe('day one', () => {
    describe('step one', () => {
        test('get total', () => {
            expect(first(input)).toBe(54877);
        });
    })
    describe('step two', () => {
        test('get total', () => {
            expect(second(input)).toBe(54100);
        });
    })
});