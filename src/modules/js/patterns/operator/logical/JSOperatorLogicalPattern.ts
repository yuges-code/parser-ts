import AbstractParserPattern from "../../../../../core/abstracts/AbstractParserPattern";
import JSOperatorLogicalToken from "../../../tokens/operator/logical/JSOperatorLogicalToken";

export default class JSOperatorLogicalPattern extends AbstractParserPattern
{
    operator = undefined as JSOperatorLogicalToken | undefined;

    properties = () => [
        'operator',
    ];

    pattern = () => [
        {
            name: 'operator',
            required: true,
            element: JSOperatorLogicalToken,
        },
    ];
};
