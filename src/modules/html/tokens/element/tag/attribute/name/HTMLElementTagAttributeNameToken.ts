import AbstractParserToken from "../../../../../../../core/abstracts/AbstractParserToken";

export default class HTMLElementTagAttributeNameToken extends AbstractParserToken
{
    rules = () => ({
        start: (symbol: string) => /[\w\-:.]/.test(symbol),
        final: (symbol: string) => /[\s\/=>]/.test(symbol),
        symbol: (symbol: string) => /[\w\-:.]/.test(symbol),
    });
};
