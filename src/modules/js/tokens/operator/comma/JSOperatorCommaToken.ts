import AbstractParserToken from "../../../../../core/abstracts/AbstractParserToken";

export default class JSOperatorCommaToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => ',',
    });
};
