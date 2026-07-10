import AbstractParserToken from "../../../../../../core/abstracts/AbstractParserToken";

export default class JSModuleAllKeywordToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => '*',
    });
};
