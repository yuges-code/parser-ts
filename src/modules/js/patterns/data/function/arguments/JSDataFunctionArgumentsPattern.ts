import AbstractParserPattern from "../../../../../../core/abstracts/AbstractParserPattern";
import PUNCTBracketRoundOpenToken from "../../../../../punct/tokens/bracket/round/PUNCTBracketRoundOpenToken";
import PUNCTBracketRoundCloseToken from "../../../../../punct/tokens/bracket/round/PUNCTBracketRoundCloseToken";
import JSDataFunctionArgumentCollection from "../../../../collections/data/function/argument/JSDataFunctionArgumentCollection";

export default class JSDataFunctionArgumentsPattern extends AbstractParserPattern
{
    bracket = {
        open: undefined as PUNCTBracketRoundOpenToken | undefined,
        close: undefined as PUNCTBracketRoundCloseToken | undefined,
    };
    values = undefined as JSDataFunctionArgumentCollection | undefined;

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
            element: PUNCTBracketRoundOpenToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'values',
            required: false,
            element: JSDataFunctionArgumentCollection,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'bracket.close',
            required: true,
            element: PUNCTBracketRoundCloseToken,
        },
    ];
};
