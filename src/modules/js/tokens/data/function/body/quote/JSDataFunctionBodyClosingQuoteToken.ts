import AbstractParserToken from "../../../../../../../core/abstracts/AbstractParserToken";

export default class JSDataFunctionBodyClosingQuoteToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => '}',
    });
};
