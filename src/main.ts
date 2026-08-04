import ParserRoot from "./core/root/ParserRoot";
import HTMLNodeCollection from "./modules/html/collections/HTMLNodeCollection";
import JSInstructionCollection from "./modules/js/collections/JSInstructionCollection";
import TSInstructionCollection from "./modules/ts/collections/TSInstructionCollection";

const strategies = {
    js: JSInstructionCollection,
    ts: TSInstructionCollection,
    // jsx: '',
    // tsx: '',
    // vue: '',
    html: HTMLNodeCollection,
};

function parse(
    content: string,
    type: keyof typeof strategies,
    position = 0 as number,
)
{
    const strategy = strategies[type];

    var {
        root,
        position,
    } = ParserRoot.parse(content, strategy, position);

    return {
        root: root,
    };
};

const parser = {
    parse: parse,
};

export default parser;
