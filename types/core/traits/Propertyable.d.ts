import { default as AbstractParserToken } from '../abstracts/AbstractParserToken';
import { default as AbstractParserPattern } from '../abstracts/AbstractParserPattern';
import { default as AbstractParserPatternCollection } from '../abstracts/AbstractParserPatternCollection';
type Constructor<T = {}> = new (...args: any[]) => T;
export default function Propertyable<T extends Constructor>(base: T): {
    new (...args: any[]): {
        properties(): string[];
        setProperty(name: string, value: AbstractParserToken | AbstractParserPattern | AbstractParserPatternCollection): /*elided*/ any;
    };
} & T;
export {};
