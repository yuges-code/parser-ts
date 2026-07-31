import AbstractParserPattern from "../../../../../core/abstracts/AbstractParserPattern";
import JSDataArrayValueCollection from "../../../collections/data/array/value/JSDataArrayValueCollection";
import PUNCTBracketSquareOpenToken from "../../../../punct/tokens/bracket/square/PUNCTBracketSquareOpenToken";
import PUNCTBracketSquareCloseToken from "../../../../punct/tokens/bracket/square/PUNCTBracketSquareCloseToken";

export default class JSDataArrayPattern extends AbstractParserPattern
{
    bracket = {
        open: undefined as PUNCTBracketSquareOpenToken | undefined,
        close: undefined as PUNCTBracketSquareCloseToken | undefined,
    };
    values = undefined as JSDataArrayValueCollection | undefined;

    properties = () => [
        'values',
        {
            'bracket': ['open', 'close'],
        },
    ];

    pattern = () => [
        {
            name: 'bracket.open',
            required: true,
            element: PUNCTBracketSquareOpenToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'values',
            required: false,
            element: JSDataArrayValueCollection,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'bracket.close',
            required: true,
            element: PUNCTBracketSquareCloseToken,
        },
    ];
};
