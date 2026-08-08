import JSExpressionBinaryPattern from "../../binary/JSExpressionBinaryPattern";
import AbstractParserPattern from "../../../../../../core/abstracts/AbstractParserPattern";
import JSOperatorAccessOptionalToken from "../../../../tokens/operator/access/JSOperatorAccessOptionalToken";
import PUNCTBracketSquareOpenToken from "../../../../../punct/tokens/bracket/square/PUNCTBracketSquareOpenToken";
import PUNCTBracketSquareCloseToken from "../../../../../punct/tokens/bracket/square/PUNCTBracketSquareCloseToken";

export default class JSExpressionAccessBracketPattern extends AbstractParserPattern
{
    bracket = {
        open: undefined as PUNCTBracketSquareOpenToken | undefined,
        close: undefined as PUNCTBracketSquareCloseToken | undefined,
    };
    operator = undefined as JSOperatorAccessOptionalToken | undefined;
    expression = undefined as JSExpressionBinaryPattern | undefined;

    properties = () => [
        'operator',
        'expression',
        {
            'bracket': ['open', 'close'],
        },
    ];

    pattern = () => [
        {
            name: 'operator',
            required: false,
            element: JSOperatorAccessOptionalToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'bracket.open',
            required: true,
            element: PUNCTBracketSquareOpenToken,
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
            element: PUNCTBracketSquareCloseToken,
        },
    ];
};
