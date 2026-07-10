import AbstractParserToken from "../../../../../../core/abstracts/AbstractParserToken";

export default class JSDataFunctionKeywordToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => 'function',
    });
};
