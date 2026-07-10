import ParserRoot from "./core/root/ParserRoot";
import JSNodeCollection from "./modules/js/collections/JSNodeCollection";
import HTMLNodeCollection from "./modules/html/collections/HTMLNodeCollection";

const strategies = {
    js: JSNodeCollection,
    // ts: '',
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
