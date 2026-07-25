import AbstractParserToken from "../../../../../core/abstracts/AbstractParserToken";

export default class PUNCTSpecialMarkExclamationToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => '!',
    });
};
