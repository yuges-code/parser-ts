import JSOperatorBreakToken from "../../../tokens/operator/break/JSOperatorBreakToken";
import AbstractParserPattern from "../../../../../core/abstracts/AbstractParserPattern";

export default class JSExpressionBreakPattern extends AbstractParserPattern
{
    operator = undefined as JSOperatorBreakToken | undefined;

    properties = () => [
        'operator',
    ];

    pattern = () => [
        {
            name: 'operator',
            required: true,
            element: JSOperatorBreakToken,
        },
    ];
};
