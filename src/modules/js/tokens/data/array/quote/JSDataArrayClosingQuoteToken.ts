import AbstractParserToken from "../../../../../../core/abstracts/AbstractParserToken";

export default class JSDataArrayClosingQuoteToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => ']',
    });
};
