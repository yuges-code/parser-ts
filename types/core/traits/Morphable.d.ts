import { default as ParserRoot } from '../root/ParserRoot';
import { default as AbstractParserPattern } from '../abstracts/AbstractParserPattern';
type Constructor<T = {}> = new (...args: any[]) => T;
export default function Morphable<T extends Constructor>(base: T): {
    new (...args: any[]): {
        morphs(): (typeof AbstractParserPattern)[];
    };
    morphs(): (typeof AbstractParserPattern)[];
    parseMorph(content: string, position: number, parent: ParserRoot | AbstractParserPattern): {
        pattern: AbstractParserPattern | undefined;
        position: number;
    };
} & T;
export {};
