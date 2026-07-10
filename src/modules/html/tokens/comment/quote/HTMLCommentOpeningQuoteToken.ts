import AbstractParserToken from "../../../../../core/abstracts/AbstractParserToken";

export default class HTMLCommentOpeningQuoteToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => '<!--',
    });
};
