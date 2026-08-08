import ParserRoot from "../root/ParserRoot";
import Arrayable from "../traits/Arrayable";
import Morphable from "../traits/Morphable";
import Patternable from "../traits/Patternable";
import AbstractParserToken from "./AbstractParserToken";

export default class AbstractParserPattern extends Arrayable(Morphable(Patternable(class {})))
{
    static parse(
        content: string,
        position: number,
        parent: ParserRoot | AbstractParserPattern,
        events = { parsed: (token: AbstractParserToken) => {} },
    )
    {
        var {
            pattern,
            position,
        } = this.parseMorph(content, position, parent, events);

        if (! pattern) {
            var {
                pattern,
                position,
            } = this.parsePattern(content, position, parent, events) as {
                pattern?: AbstractParserPattern,
                position: number
            };
        }

        return {
            pattern: pattern,
            position: position,
        };
    };

    toArray(options = { position: false })
    {
        var array = super.toArray();

        return options.position ? { ...array, ...{position: this.position} } : array;
    };
};
