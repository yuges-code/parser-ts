import { default as ParserRoot } from '../root/ParserRoot';
import { default as AbstractParserToken } from '../abstracts/AbstractParserToken';
import { default as AbstractParserPattern } from '../abstracts/AbstractParserPattern';
import { default as AbstractParserPatternCollection } from '../abstracts/AbstractParserPatternCollection';
type Constructor<T = {}> = new (...args: any[]) => T;
type Element = typeof AbstractParserToken | typeof AbstractParserPattern | typeof AbstractParserPatternCollection;
export default function Patternable<T extends Constructor>(base: T): {
    new (...args: any[]): {
        pattern(): ({
            name: string;
            required: boolean | (() => boolean);
            disabled?: boolean | (() => boolean) | undefined;
            element: Element | (() => Element);
        } | {
            skip: RegExp;
            required: boolean | (() => boolean);
        })[];
        properties(): string[];
        setProperty(name: string, value: AbstractParserToken | AbstractParserPattern | AbstractParserPatternCollection): /*elided*/ any;
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
        element: Element | (() => Element);
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
                element: Element | (() => Element);
            } | {
                skip: RegExp;
                required: boolean | (() => boolean);
            })[];
            properties(): string[];
            setProperty(name: string, value: AbstractParserToken | AbstractParserPattern | AbstractParserPatternCollection): /*elided*/ any;
            position: import('../data/ParserPosition').default | undefined;
            setPosition(position: import('../data/ParserPosition').default | number): /*elided*/ any;
            setPositionEnd(position: number): /*elided*/ any;
            parent: ParserRoot | AbstractParserPattern | undefined;
            setParent(parent: ParserRoot | AbstractParserPattern): /*elided*/ any;
        };
        position: number;
    };
    isClassConstructor(value: any): value is Element;
} & T;
export {};
