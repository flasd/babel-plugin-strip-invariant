import { exists, isString, isNumber } from './utils';

const PLUGIN_TAG = 'babel-plugin-strip-invariant';
const DEFAULT_PRAGMA = 'invariant';
const DEFAULT_ARG_COUNT = 1;

/**
 * @function getOptions
 * @param  {Number} argCount Amount of args to preserve.
 * @param  {String} pragma   Identifier of the function to target.
 * @return {Object} The argCount and pragma to be used.
 */
export function getOptions(options) {
    const { argCount, pragma } = options;

    if (exists(argCount)) {
        if (!isNumber(argCount)) {
            throw new TypeError(
                `${PLUGIN_TAG} Error.\nExpected argCount to be a Number but instead got ${typeof argCount}`,
            );
        } else if (argCount <= 0) {
            throw new TypeError(
                `${PLUGIN_TAG} Error.\nExpected argCount to be grater then 0 but instead got ${argCount}`,
            );
        }
    }

    if (exists(pragma)) {
        if (!isString(pragma)) {
            throw new TypeError(
                `${PLUGIN_TAG} Error.\nExpected pragma to be a String but instead got ${typeof pragma}`,
            );
        } else if (pragma.length === 0) {
            throw new TypeError(
                `${PLUGIN_TAG} Error.\nPragma must be a String with length bigger than 0`,
            );
        }
    }

    return {
        ARG_COUNT: argCount || DEFAULT_ARG_COUNT,
        PRAGMA: pragma || DEFAULT_PRAGMA,
    };
}


/**
 * @function Plugin
 * @param  {Babel} arguments0 Babel object.
 * @return {Plugin} Babel plugin.
 */
export default function Plugin({ types: t }) {
    /**
     * @function CallExpression
     * @description Modifies CallExpressions that are equal to PRAGMA.
     * @param {Path} path Babel Path Object.
     * @param {State} state Babel State Object.
     */
    function CallExpression(path, state) {
        const { node } = path;
        const { ARG_COUNT, PRAGMA } = getOptions(state.opts);

        if (node.callee.name === PRAGMA && node.arguments.length > ARG_COUNT) {
            const newNode = t.callExpression(
                t.identifier(PRAGMA),
                [...node.arguments.slice(0, ARG_COUNT)],
            );

            path.replaceWith(newNode);
        }
    }

    return {
        visitor: {
            CallExpression,
        },
    };
}

