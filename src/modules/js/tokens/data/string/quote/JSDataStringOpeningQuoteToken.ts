import AbstractParserToken from "../../../../../../core/abstracts/AbstractParserToken";

export default class JSDataStringOpeningQuoteToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => ['\'', '"', '`'],
    });
};
