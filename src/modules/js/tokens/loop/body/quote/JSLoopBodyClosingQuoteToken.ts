import AbstractParserToken from "../../../../../../core/abstracts/AbstractParserToken";

export default class JSLoopBodyClosingQuoteToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => '}',
    });
};
