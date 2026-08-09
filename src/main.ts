import ParserRoot from "./core/root/ParserRoot";
import AbstractParserToken from "./core/abstracts/AbstractParserToken";
import VUENodeCollection from "./modules/vue/collections/VUENodeCollection";
import HTMLNodeCollection from "./modules/html/collections/HTMLNodeCollection";
import JSInstructionCollection from "./modules/js/collections/JSInstructionCollection";
import TSInstructionCollection from "./modules/ts/collections/TSInstructionCollection";

const strategies = {
    vue: VUENodeCollection,
    html: HTMLNodeCollection,
    js: JSInstructionCollection,
    ts: TSInstructionCollection,
    // jsx: '',
    // tsx: '',
};

function parse(
    content: string,
    type: keyof typeof strategies,
    position = 0 as number,
    events = { parsed: (token: AbstractParserToken) => {} },
)
{
    const strategy = strategies[type];

    var {
        root,
        position,
    } = ParserRoot.parse(content, strategy, position, events);

    return {
        root: root,
    };
};

const parser = {
    parse: parse,
};

export default parser;
