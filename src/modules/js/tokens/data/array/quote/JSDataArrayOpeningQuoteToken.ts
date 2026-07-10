import AbstractParserToken from "../../../../../../core/abstracts/AbstractParserToken";

export default class JSDataArrayOpeningQuoteToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => '[',
    });
};
