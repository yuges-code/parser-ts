import JSNodeCollection from "../../../collections/JSNodeCollection";
import AbstractParserPattern from "../../../../../core/abstracts/AbstractParserPattern";
import PUNCTBracketCurlyOpenToken from "../../../../punct/tokens/bracket/curly/PUNCTBracketCurlyOpenToken";
import PUNCTBracketCurlyCloseToken from "../../../../punct/tokens/bracket/curly/PUNCTBracketCurlyCloseToken";

export default class JSLoopBodyPattern extends AbstractParserPattern
{
    bracket = {
        open: undefined as PUNCTBracketCurlyOpenToken | undefined,
        close: undefined as PUNCTBracketCurlyCloseToken | undefined,
    };
    instructions = undefined as JSNodeCollection | undefined;

    properties = () => [
        'instructions',
        {
            'bracket': ['open', 'close'],
        },
    ];

    pattern = () => [
        {
            name: 'bracket.open',
            required: true,
            element: PUNCTBracketCurlyOpenToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'instructions',
            required: false,
            element: JSNodeCollection,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'bracket.close',
            required: true,
            element: PUNCTBracketCurlyCloseToken,
        },
    ];
};
