import AbstractParserPattern from "../../../../core/abstracts/AbstractParserPattern";
import JSExpressionBinaryPattern from "../expression/binary/JSExpressionBinaryPattern";
import PUNCTBracketRoundOpenToken from "../../../punct/tokens/bracket/round/PUNCTBracketRoundOpenToken";
import PUNCTBracketRoundCloseToken from "../../../punct/tokens/bracket/round/PUNCTBracketRoundCloseToken";

export default class JSConditionPattern extends AbstractParserPattern
{
    bracket = {
        open: undefined as PUNCTBracketRoundOpenToken | undefined,
        close: undefined as PUNCTBracketRoundCloseToken | undefined,
    }
    expression = undefined as JSExpressionBinaryPattern | undefined;

    properties = () => [
        {
            'bracket': ['open', 'close']
        },
        'expression',
    ]

    pattern = () => [
        {
            name: 'bracket.open',
            required: true,
            element: PUNCTBracketRoundOpenToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'expression',
            required: true,
            element: JSExpressionBinaryPattern,
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
