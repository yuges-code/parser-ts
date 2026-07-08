import { default as AbstractParserPattern } from './AbstractParserPattern';
interface Rules {
    start: <T extends AbstractParserPattern>(symbol: string, content: string, position: number, parent: T) => boolean;
    final: <T extends AbstractParserPattern>(symbol: string, content: string, position: number, parent: T) => boolean;
    symbol: <T extends AbstractParserPattern>(symbol: string, content: string, position: number, parent: T) => boolean;
    length?: <T extends AbstractParserPattern>(symbol: string, content: string, position: number, parent: T) => undefined | number;
    lexeme?: <T extends AbstractParserPattern>(symbol: string, content: string, position: number, parent: T) => string | string[];
}
declare const AbstractParserToken_base: {
    new (...args: any[]): {
        toArray(options?: any): {
            [x: string]: any;
        };
        properties(): string[];
        setProperty(name: string, value: AbstractParserToken | AbstractParserPattern | import('./AbstractParserPatternCollection').default): /*elided*/ any;
    };
} & {
    new (...args: any[]): {
        parent: import('../root/ParserRoot').default | AbstractParserPattern | undefined;
        setParent(parent: import('../root/ParserRoot').default | AbstractParserPattern): /*elided*/ any;
    };
} & {
    new (...args: any[]): {
        position: import('../data/ParserPosition').default | undefined;
        setPosition(position: import('../data/ParserPosition').default | number): /*elided*/ any;
        setPositionEnd(position: number): /*elided*/ any;
    };
} & {
    new (): {};
};
export default class AbstractParserToken extends AbstractParserToken_base {
    static name: string;
    lexeme: string | undefined;
    length: () => number;
    properties: () => string[];
    concat(symbol: string): string;
    setSymbol(symbol: string): this;
    rules: () => Rules;
    static rules(): Rules;
    required(): boolean;
    static required(): boolean;
    static parse(content: string, position: number, parent: AbstractParserPattern): {
        token: undefined;
        position: number;
    } | {
        token: AbstractParserToken;
        position: number;
    };
    lexemeStartsWith(lexeme: string | string[], str: string): boolean;
    lexemeIncludes(lexeme: string | string[], str: string): boolean;
}
export {};
