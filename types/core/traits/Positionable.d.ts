import { default as ParserPosition } from '../data/ParserPosition';
type Constructor<T = {}> = new (...args: any[]) => T;
export default function Positionable<T extends Constructor>(base: T): {
    new (...args: any[]): {
        position: ParserPosition | undefined;
        setPosition(position: ParserPosition | number): /*elided*/ any;
        setPositionEnd(position: number): /*elided*/ any;
    };
} & T;
export {};
