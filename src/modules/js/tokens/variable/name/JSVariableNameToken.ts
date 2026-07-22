import AbstractParserToken from "../../../../../core/abstracts/AbstractParserToken";

export default class JSVariableNameToken extends AbstractParserToken
{
    rules = () => ({
        start: (symbol: string) => /[a-zA-Z_$]/.test(symbol),
        final: (symbol: string) => /[^a-zA-Z0-9_$]/.test(symbol),
        symbol: (symbol: string) => /[a-zA-Z0-9_$]/.test(symbol),
        disabled: () => disabled,
    });
};

const disabled = [
    'var',
    'let',
    'null',
    'this',
    'const',

    'true',
    'false',

    'new',
    'enum',
    'class',
    'super',
    'extends',
    'finally',

    'if',
    'in',
    'else',
    'case',
    'break',
    'switch',
    'typeof',
    'default',
    'instanceof',

    'do',
    'for',
    'with',
    'while',
    'continue',

    'try',
    'catch',
    'throw',

    'void',
    'yield',
    'function',

    'delete',
    'return',
    'debugger',

    'import',
    'export',
];
