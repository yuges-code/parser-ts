import { default as ParserRoot } from '../root/ParserRoot';
declare const AbstractParserPattern_base: {
    new (...args: any[]): {
        toArray(options?: any): {
            [x: string]: any;
        };
        properties(): string[];
        setProperty(name: string, value: import('./AbstractParserToken').default | AbstractParserPattern | import('./AbstractParserPatternCollection').default): /*elided*/ any;
    };
} & {
    new (...args: any[]): {
        morphs(): (typeof AbstractParserPattern)[];
    };
    morphs(): (typeof AbstractParserPattern)[];
    parseMorph(content: string, position: number, parent: ParserRoot | AbstractParserPattern): {
        pattern: AbstractParserPattern | undefined;
        position: number;
    };
} & {
    new (...args: any[]): {
        pattern(): ({
            name: string;
            required: boolean | (() => boolean);
            disabled?: boolean | (() => boolean) | undefined;
            element: (typeof import('./AbstractParserToken').default | typeof import('./AbstractParserPatternCollection').default | typeof AbstractParserPattern) | (() => typeof import('./AbstractParserToken').default | typeof import('./AbstractParserPatternCollection').default | typeof AbstractParserPattern);
        } | {
            skip: RegExp;
            required: boolean | (() => boolean);
        })[];
        properties(): string[];
        setProperty(name: string, value: import('./AbstractParserToken').default | AbstractParserPattern | import('./AbstractParserPatternCollection').default): /*elided*/ any;
        position: import('../data/ParserPosition').default | undefined;
        setPosition(position: import('../data/ParserPosition').default | number): /*elided*/ any;
        setPositionEnd(position: number): /*elided*/ any;
        parent: ParserRoot | AbstractParserPattern | undefined;
        setParent(parent: ParserRoot | AbstractParserPattern): /*elided*/ any;
    };
    pattern(): ({
        name: string;
        required: boolean | (() => boolean);
        disabled?: boolean | (() => boolean) | undefined;
        element: (typeof import('./AbstractParserToken').default | typeof import('./AbstractParserPatternCollection').default | typeof AbstractParserPattern) | (() => typeof import('./AbstractParserToken').default | typeof import('./AbstractParserPatternCollection').default | typeof AbstractParserPattern);
    } | {
        skip: RegExp;
        required: boolean | (() => boolean);
    })[];
    parsePattern(content: string, position: number, parent: ParserRoot | AbstractParserPattern): {
        pattern: undefined;
        position: number;
    } | {
        pattern: {
            pattern(): ({
                name: string;
                required: boolean | (() => boolean);
                disabled?: boolean | (() => boolean) | undefined;
                element: (typeof import('./AbstractParserToken').default | typeof import('./AbstractParserPatternCollection').default | typeof AbstractParserPattern) | (() => typeof import('./AbstractParserToken').default | typeof import('./AbstractParserPatternCollection').default | typeof AbstractParserPattern);
            } | {
                skip: RegExp;
                required: boolean | (() => boolean);
            })[];
            properties(): string[];
            setProperty(name: string, value: import('./AbstractParserToken').default | AbstractParserPattern | import('./AbstractParserPatternCollection').default): /*elided*/ any;
            position: import('../data/ParserPosition').default | undefined;
            setPosition(position: import('../data/ParserPosition').default | number): /*elided*/ any;
            setPositionEnd(position: number): /*elided*/ any;
            parent: ParserRoot | AbstractParserPattern | undefined;
            setParent(parent: ParserRoot | AbstractParserPattern): /*elided*/ any;
        };
        position: number;
    };
    isClassConstructor(value: any): value is typeof import('./AbstractParserToken').default | typeof import('./AbstractParserPatternCollection').default | typeof AbstractParserPattern;
} & {
    new (): {};
};
export default class AbstractParserPattern extends AbstractParserPattern_base {
    static parse(content: string, position: number, parent: ParserRoot | AbstractParserPattern): {
        pattern: AbstractParserPattern | undefined;
        position: number;
    };
    toArray(options?: {
        position: boolean;
    }): {
        [x: string]: any;
    };
}
export {};
