import { default as ParserRoot } from '../root/ParserRoot';
import { default as AbstractParserPattern } from '../abstracts/AbstractParserPattern';
type Constructor<T = {}> = new (...args: any[]) => T;
export default function Parentable<T extends Constructor>(base: T): {
    new (...args: any[]): {
        parent: ParserRoot | AbstractParserPattern | undefined;
        setParent(parent: ParserRoot | AbstractParserPattern): /*elided*/ any;
    };
} & T;
export {};
