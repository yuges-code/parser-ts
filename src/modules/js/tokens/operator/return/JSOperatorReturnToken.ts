import AbstractParserToken from "../../../../../core/abstracts/AbstractParserToken";

export default class JSOperatorReturnToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => 'return',
    });
};
