import AbstractParserToken from "../../../../../../core/abstracts/AbstractParserToken";

export default class JSLoopForKeywordToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => 'for',
    });
};
