import AbstractParserToken from "../../../../../../core/abstracts/AbstractParserToken";

export default class JSConditionBodyOpeningQuoteToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => '{',
    });
};
