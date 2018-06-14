export function is(value, tag) {
    return Object.prototype.toString.call(value) === tag;
}

export function isString(value) {
    return is(value, '[object String]');
}

export function isNumber(value) {
    return is(value, '[object Number]');
}

export function exists(value) {
    return !is(value, '[object Undefined]');
}
