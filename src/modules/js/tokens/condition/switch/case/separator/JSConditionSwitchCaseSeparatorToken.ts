import AbstractParserToken from "../../../../../../../core/abstracts/AbstractParserToken";

export default class JSConditionSwitchCaseSeparatorToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => ':',
    });
};
