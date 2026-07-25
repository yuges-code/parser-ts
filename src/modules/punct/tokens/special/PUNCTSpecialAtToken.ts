import AbstractParserToken from "../../../../core/abstracts/AbstractParserToken";

export default class PUNCTSpecialAtToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => '@',
    });
};
