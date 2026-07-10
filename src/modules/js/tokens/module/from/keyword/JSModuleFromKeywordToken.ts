import AbstractParserToken from "../../../../../../core/abstracts/AbstractParserToken";

export default class JSModuleFromKeywordToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => 'from',
    });
};
