import JSInstructionCollection from "../../../../collections/JSInstructionCollection";
import AbstractParserPattern from "../../../../../../core/abstracts/AbstractParserPattern";
import PUNCTBracketCurlyOpenToken from "../../../../../punct/tokens/bracket/curly/PUNCTBracketCurlyOpenToken";
import PUNCTBracketCurlyCloseToken from "../../../../../punct/tokens/bracket/curly/PUNCTBracketCurlyCloseToken";

export default class JSDataFunctionBodyPattern extends AbstractParserPattern
{
    bracket = {
        open: undefined as PUNCTBracketCurlyOpenToken | undefined,
        close: undefined as PUNCTBracketCurlyCloseToken | undefined,
    };
    instructions = undefined as JSInstructionCollection | undefined;

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
            element: JSInstructionCollection,
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
