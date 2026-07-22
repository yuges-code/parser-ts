import AbstractParserToken from "../../../../../../core/abstracts/AbstractParserToken";

export default class JSConditionSwitchKeywordToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => 'switch',
    });
};
