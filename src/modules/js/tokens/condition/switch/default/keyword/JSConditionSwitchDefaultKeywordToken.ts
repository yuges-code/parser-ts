import AbstractParserToken from "../../../../../../../core/abstracts/AbstractParserToken";

export default class JSConditionSwitchDefaultKeywordToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => 'default',
    });
};
