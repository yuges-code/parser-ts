import AbstractParserToken from "../../../../../core/abstracts/AbstractParserToken";

export default class JSOperatorBreakToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => 'break',
    });
};
