import JSVariableNameToken from "../../../../tokens/variable/name/JSVariableNameToken";
import AbstractParserPattern from "../../../../../../core/abstracts/AbstractParserPattern";
import JSOperatorAccessToken from "../../../../tokens/operator/access/JSOperatorAccessToken";
import JSOperatorAccessOptionalToken from "../../../../tokens/operator/access/JSOperatorAccessOptionalToken";

export default class JSExpressionAccessDotPattern extends AbstractParserPattern
{
    operator = undefined as
        undefined |
        JSOperatorAccessToken |
        JSOperatorAccessOptionalToken;
    identifier = undefined as JSVariableNameToken | undefined;

    properties = () => [
        'operator',
        'identifier',
    ];

    pattern = () => [
        {
            name: 'operator',
            required: true,
            element: [
                JSOperatorAccessToken,
                JSOperatorAccessOptionalToken,
            ],
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'identifier',
            required: true,
            element: JSVariableNameToken,
        }, 
    ];
};
