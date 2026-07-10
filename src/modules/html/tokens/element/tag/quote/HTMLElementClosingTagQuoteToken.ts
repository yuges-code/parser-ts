import AbstractParserToken from "../../../../../../core/abstracts/AbstractParserToken";

export default class HTMLElementClosingTagQuoteToken extends AbstractParserToken
{
    rules = () => ({
        start: (symbol: string) => symbol === '>',
        final: (symbol: string) => symbol != '>',
        symbol: (symbol: string) => symbol === '>',
    });
};
