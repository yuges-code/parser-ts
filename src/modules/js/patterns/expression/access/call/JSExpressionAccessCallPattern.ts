import JSExpressionCallingPattern from "../../calling/JSExpressionCallingPattern";
import AbstractParserPattern from "../../../../../../core/abstracts/AbstractParserPattern";
import JSOperatorAccessToken from "../../../../tokens/operator/access/JSOperatorAccessToken";
import JSOperatorAccessOptionalToken from "../../../../tokens/operator/access/JSOperatorAccessOptionalToken";

export default class JSExpressionAccessCallPattern extends AbstractParserPattern
{
    operator = undefined as
        undefined |
        JSOperatorAccessToken |
        JSOperatorAccessOptionalToken;
    calling = undefined as JSExpressionCallingPattern | undefined;

    properties = () => [
        'operator',
        'calling',
    ];

    pattern = () => [
        {
            name: 'operator',
            required: false,
            element: [
                JSOperatorAccessToken,
                JSOperatorAccessOptionalToken,
            ],
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'calling',
            required: true,
            element: JSExpressionCallingPattern,
        },
    ];
};
