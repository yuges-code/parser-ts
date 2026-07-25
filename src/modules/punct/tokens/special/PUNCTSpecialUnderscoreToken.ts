import AbstractParserToken from "../../../../core/abstracts/AbstractParserToken";

export default class PUNCTSpecialUnderscoreToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => '_',
    });
};
