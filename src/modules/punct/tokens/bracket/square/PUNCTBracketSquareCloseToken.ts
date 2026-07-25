import AbstractParserToken from "../../../../../core/abstracts/AbstractParserToken";

export default class PUNCTBracketSquareCloseToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => ']',
    });
};
