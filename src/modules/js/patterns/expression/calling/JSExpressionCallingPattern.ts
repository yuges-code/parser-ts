import AbstractParserPattern from "../../../../../core/abstracts/AbstractParserPattern";
import PUNCTBracketRoundOpenToken from "../../../../punct/tokens/bracket/round/PUNCTBracketRoundOpenToken";
import PUNCTBracketRoundCloseToken from "../../../../punct/tokens/bracket/round/PUNCTBracketRoundCloseToken";

export default class JSExpressionCallingPattern extends AbstractParserPattern
{
    bracket = {
        open: undefined as PUNCTBracketRoundOpenToken | undefined,
        close: undefined as PUNCTBracketRoundCloseToken | undefined,
    };

    properties = () => [
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
            name: 'bracket.close',
            required: true,
            element: PUNCTBracketRoundCloseToken,
        },
    ];
};
