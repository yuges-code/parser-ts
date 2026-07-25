import AbstractParserToken from "../../../../core/abstracts/AbstractParserToken";

export default class PUNCTSpecialBacktickToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => '`',
    });
};
