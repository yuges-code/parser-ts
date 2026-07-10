import AbstractParserToken from "../../../../../core/abstracts/AbstractParserToken";

export default class JSOperatorAccessToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => '.',
    });
};
