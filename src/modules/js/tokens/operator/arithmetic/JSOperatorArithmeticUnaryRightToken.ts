import AbstractParserToken from "../../../../../core/abstracts/AbstractParserToken";

export default class JSOperatorArithmeticUnaryRightToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => [
            '++',
            '--',
        ],
    });
};
