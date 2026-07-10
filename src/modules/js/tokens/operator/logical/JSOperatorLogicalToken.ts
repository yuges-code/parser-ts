import AbstractParserToken from "../../../../../core/abstracts/AbstractParserToken";

export default class JSOperatorLogicalToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => [
            '&&=',
            '&&',
            '||',
            '??=',
            '??',
        ],
    });
};
