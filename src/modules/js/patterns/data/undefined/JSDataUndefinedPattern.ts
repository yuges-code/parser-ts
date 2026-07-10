import AbstractParserPattern from "../../../../../core/abstracts/AbstractParserPattern";
import JSDataUndefinedValueToken from "../../../tokens/data/undefined/JSDataUndefinedValueToken";

export default class JSDataUndefinedPattern extends AbstractParserPattern
{
    value = undefined as JSDataUndefinedValueToken | undefined;

    properties = () => [
        'value',
    ];

    pattern = () => [
        {
            name: 'value',
            required: true,
            element: JSDataUndefinedValueToken,
        },
    ];
};
