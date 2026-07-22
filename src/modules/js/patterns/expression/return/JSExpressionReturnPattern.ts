import JSExpressionBinaryPattern from "../binary/JSExpressionBinaryPattern";
import AbstractParserPattern from "../../../../../core/abstracts/AbstractParserPattern";
import JSOperatorReturnToken from "../../../tokens/operator/return/JSOperatorReturnToken";

export default class JSExpressionReturnPattern extends AbstractParserPattern
{
    operator = undefined as JSOperatorReturnToken | undefined;
    expression = undefined as JSExpressionBinaryPattern | undefined;

    properties = () => [
        'operator',
        'expression',
    ];

    pattern = () => [
        {
            name: 'operator',
            required: true,
            element: JSOperatorReturnToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'expression',
            required: false,
            element: JSExpressionBinaryPattern,
        },
    ];
};
