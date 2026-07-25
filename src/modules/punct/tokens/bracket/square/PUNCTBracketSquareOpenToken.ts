import AbstractParserToken from "../../../../../core/abstracts/AbstractParserToken";

export default class PUNCTBracketSquareOpenToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => '[',
    });
};
