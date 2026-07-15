import AbstractParserToken from "../../../../../../../core/abstracts/AbstractParserToken";

export default class JSLoopForConditionSeparatorToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => ';',
    });
};
