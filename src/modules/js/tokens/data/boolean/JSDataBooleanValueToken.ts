import AbstractParserToken from "../../../../../core/abstracts/AbstractParserToken";

export default class JSDataBooleanValueToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => [
            'true',
            'false',
        ],
    });
};
