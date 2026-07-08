type Constructor<T = {}> = new (...args: any[]) => T;
export default function Arrayable<T extends Constructor>(base: T): {
    new (...args: any[]): {
        toArray(options?: any): {
            [x: string]: any;
        };
        properties(): string[];
        setProperty(name: string, value: import('../abstracts/AbstractParserToken').default | import('../abstracts/AbstractParserPattern').default | import('../abstracts/AbstractParserPatternCollection').default): /*elided*/ any;
    };
} & T;
export {};
