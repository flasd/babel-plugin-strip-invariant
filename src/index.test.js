import path from 'path';
import { transform } from 'babel-core';

function resolve(partial) {
    return path.resolve(process.cwd(), partial);
}

const PLUGIN_PATH = resolve('src/index.js');

const BABEL_OPTIONS = {
    plugins: [
        PLUGIN_PATH,
    ],
};

test('removes invariant args', () => {
    const { code } = transform('invariant(1, 2, 3);', BABEL_OPTIONS);

    expect(code).toBe('invariant(1);');
});

test('should accept custom options', () => {
    const customOptions = {
        plugins: [
            [PLUGIN_PATH, {
                pragma: 'myFunc',
                argCount: 2,
            }],
        ],
    };

    const { code } = transform('myFunc(1, 2, 3);', customOptions);

    expect(code).toBe('myFunc(1, 2);');
});

test('should throw on wrong options', () => {
    expect(() => transform('invariant(1, 2, 3)', {
        plugins: [
            [PLUGIN_PATH, {
                pragma: '',
            }],
        ],
    })).toThrow();

    expect(() => transform('invariant(1, 2, 3)', {
        plugins: [
            [PLUGIN_PATH, {
                pragma: 2,
            }],
        ],
    })).toThrow();

    expect(() => transform('invariant(1, 2, 3)', {
        plugins: [
            [PLUGIN_PATH, {
                argCount: 0,
            }],
        ],
    })).toThrow();

    expect(() => transform('invariant(1, 2, 3)', {
        plugins: [
            [PLUGIN_PATH, {
                argCount: 'squanchy',
            }],
        ],
    })).toThrow();
});
