import { default as ParserRoot } from '../root/ParserRoot';
import { default as AbstractParserPattern } from './AbstractParserPattern';
declare const AbstractParserPatternCollection_base: {
    new (...args: any[]): {
        toArray(options?: any): {
            [x: string]: any;
        };
        properties(): string[];
        setProperty(name: string, value: import('./AbstractParserToken').default | AbstractParserPattern | AbstractParserPatternCollection): /*elided*/ any;
    };
} & {
    new (...args: any[]): {
        position: import('../data/ParserPosition').default | undefined;
        setPosition(position: import('../data/ParserPosition').default | number): /*elided*/ any;
        setPositionEnd(position: number): /*elided*/ any;
    };
} & {
    new (...args: any[]): {
        parent: ParserRoot | AbstractParserPattern | undefined;
        setParent(parent: ParserRoot | AbstractParserPattern): /*elided*/ any;
    };
} & {
    new (): {};
};
export default class AbstractParserPatternCollection extends AbstractParserPatternCollection_base {
    items: AbstractParserPattern[];
    skip: () => RegExp | boolean;
    push(...items: AbstractParserPattern[]): this;
    pattern(): typeof AbstractParserPattern | undefined;
    static pattern(): typeof AbstractParserPattern | undefined;
    static parse(content: string, position: number, parent: ParserRoot | AbstractParserPattern): {
        position: number;
        collection: AbstractParserPatternCollection;
    };
    toArray(options?: {
        position: boolean;
    }): {
        [x: string]: any;
    }[];
}
export {};
