import { is, isNumber, isString, exists } from './index';

test('is', () => {
    expect(is('string', '[object String]')).toBe(true);
    expect(is(137, '[object Number]')).toBe(true);
    expect(is(false, '[object Boolean]')).toBe(true);
    expect(is(undefined, '[object Undefined]')).toBe(true);
    expect(is(null, '[object Null]')).toBe(true);
    expect(is({}, '[object Object]')).toBe(true);

    expect(is('string', '[object Number]')).toBe(false);
    expect(is(137, '[object Boolean]')).toBe(false);
    expect(is(false, '[object Undefined]')).toBe(false);
    expect(is(undefined, '[object Null]')).toBe(false);
    expect(is(null, '[object Object]')).toBe(false);
    expect(is({}, '[object String]')).toBe(false);
});

test('isNumber', () => {
    expect(isNumber(137)).toBe(true);

    expect(isNumber('squanchy')).toBe(false);
    expect(isNumber(false)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber({})).toBe(false);
});

test('isString', () => {
    expect(isString('squanchy')).toBe(true);

    expect(isString(137)).toBe(false);
    expect(isString(false)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString({})).toBe(false);
});

test('exists', () => {
    expect(exists(undefined)).toBe(false);

    expect(exists('squanchy')).toBe(true);
    expect(exists(137)).toBe(true);
    expect(exists(false)).toBe(true);
    expect(exists(null)).toBe(true);
    expect(exists({})).toBe(true);
});
