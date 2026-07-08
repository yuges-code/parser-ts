import { default as AbstractParserPatternCollection } from '../abstracts/AbstractParserPatternCollection';
declare const ParserRoot_base: {
    new (...args: any[]): {
        position: import('../data/ParserPosition').default | undefined;
        setPosition(position: import('../data/ParserPosition').default | number): /*elided*/ any;
        setPositionEnd(position: number): /*elided*/ any;
    };
} & {
    new (): {};
};
export default class ParserRoot extends ParserRoot_base {
    children: AbstractParserPatternCollection | undefined;
    setChildren(collection: AbstractParserPatternCollection): this;
    static parse(content: string, collection: typeof AbstractParserPatternCollection, position: number): {
        root: ParserRoot;
        position: number;
    };
    toArray(options?: {
        position: boolean;
    }): {
        children: {
            [x: string]: any;
        }[] | undefined;
    };
}
export {};
