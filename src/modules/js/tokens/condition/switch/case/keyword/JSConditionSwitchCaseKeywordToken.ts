import AbstractParserToken from "../../../../../../../core/abstracts/AbstractParserToken";

export default class JSConditionSwitchCaseKeywordToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => 'case',
    });
};
