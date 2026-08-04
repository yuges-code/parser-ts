
import HTMLNodeCollection from "../../collections/HTMLNodeCollection";
import HTMLElementOpeningTagPattern from "./tag/HTMLElementOpeningTagPattern";
import HTMLElementClosingTagPattern from "./tag/HTMLElementClosingTagPattern";
import AbstractParserPattern from "../../../../core/abstracts/AbstractParserPattern";
import JSInstructionCollection from "../../../js/collections/JSInstructionCollection";
import TSInstructionCollection from "../../../ts/collections/TSInstructionCollection";

export default class HTMLElementPattern extends AbstractParserPattern
{
    children = undefined as HTMLNodeCollection | undefined;
    openingTag = undefined as HTMLElementOpeningTagPattern | undefined;
    closingTag = undefined as HTMLElementClosingTagPattern | undefined;

    properties = () => [
        'children',
        'openingTag',
        'closingTag',
    ];

    pattern = () => [
        {
            name: 'openingTag',
            required: true,
            element: HTMLElementOpeningTagPattern,
        }, {
            name: 'children',
            required: false,
            disabled: () => {
                const name = this.openingTag?.name?.lexeme?.toLowerCase();

                return name ? this.singles().includes(name) : false;
            },
            element: () => {
                const name = this.openingTag?.name?.lexeme?.toLowerCase();

                if (name === 'script') {
                    const attribute = this.openingTag?.getAttribute('lang');

                    return this.langs()?.[
                        (attribute?.value?.lexeme || 'js') as keyof ReturnType<typeof this.langs>
                    ] || JSInstructionCollection;
                }

                return HTMLNodeCollection;
            },
        }, {
            name: 'closingTag',
            required: () => {
                const name = this.openingTag?.name?.lexeme?.toLowerCase();

                return name ? !this.singles().includes(name) : false;
            },
            element: HTMLElementClosingTagPattern,
        },
    ];

    singles = () => [
        'hr',
        'br',
        'img',
        'wbr',
        'col',
        'meta',
        'link',
        'base',
        'area',
        'input',
        'param',
        'track',
        'embed',
        'source',
        'keygen',
        'command',
        'menuitem',
        '!doctype',
    ];

    langs = () => ({
        js: JSInstructionCollection,
        ts: TSInstructionCollection,
    });
};
