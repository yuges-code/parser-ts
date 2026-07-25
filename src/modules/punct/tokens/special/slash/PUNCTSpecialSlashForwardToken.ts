import AbstractParserToken from "../../../../../core/abstracts/AbstractParserToken";

export default class PUNCTSpecialSlashForwardToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => '/',
    });
};
