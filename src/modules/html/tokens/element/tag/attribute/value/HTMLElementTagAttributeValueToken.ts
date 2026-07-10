import AbstractParserToken from "../../../../../../../core/abstracts/AbstractParserToken";
import AbstractParserPattern from "../../../../../../../core/abstracts/AbstractParserPattern";
import HTMLElementTagAttributePattern from "../../../../../patterns/element/tag/attribute/HTMLElementTagAttributePattern";

export default class HTMLElementTagAttributeValueToken extends AbstractParserToken
{
    rules = () => ({
        start: (
            symbol: string,
            content: string,
            position: number,
            parent: AbstractParserPattern,
        ) => {
            if (! (parent instanceof HTMLElementTagAttributePattern)) {
                return false;
            }

            if (parent.openingQuote?.lexeme) {
                return parent.openingQuote.lexeme === '"' ? symbol != '"' : symbol != "'";
            } else {
                return /[^>]/.test(symbol);
            }
        },
        final: (
            symbol: string,
            content: string,
            position: number,
            parent: AbstractParserPattern,
        ) => {
            if (! (parent instanceof HTMLElementTagAttributePattern)) {
                return false;
            }

            if (parent.openingQuote?.lexeme) {
                return parent.openingQuote.lexeme === '"' ? symbol === '"' : symbol === "'";
            } else {
                return /[\s>]/.test(symbol);
            } 
        },
        symbol: (symbol: string) => true,
    });
};
