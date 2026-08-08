import JSExpressionAccessDotPattern from "./dot/JSExpressionAccessDotPattern";
import JSExpressionAccessCallPattern from "./call/JSExpressionAccessCallPattern";
import AbstractParserPattern from "../../../../../core/abstracts/AbstractParserPattern";
import JSExpressionAccessBracketPattern from "./bracket/JSExpressionAccessBracketPattern";

export default class JSExpressionAccessPattern extends AbstractParserPattern
{
    expression = undefined as
        undefined |
        JSExpressionAccessDotPattern |
        JSExpressionAccessCallPattern |
        JSExpressionAccessBracketPattern;
    access = undefined as JSExpressionAccessPattern | undefined;

    properties = () => [
        'expression',
        'access',
    ];

    pattern = () => [
        {
            name: 'expression',
            required: true,
            element: [
                JSExpressionAccessDotPattern,
                JSExpressionAccessCallPattern,
                JSExpressionAccessBracketPattern,
            ],
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'access',
            required: false,
            element: JSExpressionAccessPattern,
        },
    ];
};
