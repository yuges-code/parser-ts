import AbstractParserToken from "../../../../../core/abstracts/AbstractParserToken";

export default class JSVariableKeywordToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => ['var', 'let', 'const'],
    });
};
