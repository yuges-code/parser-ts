import AbstractParserToken from "../../../../../../core/abstracts/AbstractParserToken";

export default class HTMLElementOpeningTagClosingSlashToken extends AbstractParserToken
{
    rules = () => ({
        start: (symbol: string) => symbol === '/',
        final: (symbol: string) => symbol != '/',
        symbol: (symbol: string) => symbol === '/',
        length: () => 1,
    });
};
