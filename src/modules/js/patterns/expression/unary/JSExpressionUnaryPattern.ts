import JSExpressionBinaryPattern from "../binary/JSExpressionBinaryPattern";
import AbstractParserPattern from "../../../../../core/abstracts/AbstractParserPattern";
import JSOperatorUnaryLeftPattern from "../../operator/unary/JSOperatorUnaryLeftPattern";
import PUNCTBracketRoundOpenToken from "../../../../punct/tokens/bracket/round/PUNCTBracketRoundOpenToken";
import PUNCTBracketRoundCloseToken from "../../../../punct/tokens/bracket/round/PUNCTBracketRoundCloseToken";

export default class JSExpressionUnaryPattern extends AbstractParserPattern
{
    bracket = {
        open: undefined as PUNCTBracketRoundOpenToken | undefined,
        close: undefined as PUNCTBracketRoundCloseToken | undefined,
    };
    operator = undefined as JSOperatorUnaryLeftPattern | undefined;
    right = undefined as JSExpressionUnaryPattern | JSExpressionBinaryPattern | undefined;

    properties = () => [
        'operator',
        'right',
        {
            'bracket': ['open', 'close'],
        },
    ];

    pattern = () => [
        {
            name: 'operator',
            required: true,
            element: JSOperatorUnaryLeftPattern,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'bracket.open',
            required: false,
            element: PUNCTBracketRoundOpenToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'right',
            required: true,
            element: JSExpressionBinaryPattern,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'bracket.close',
            required: () => this.bracket.open != undefined,
            disabled: () => this.bracket.open === undefined,
            element: PUNCTBracketRoundCloseToken,
        },
    ];
};
