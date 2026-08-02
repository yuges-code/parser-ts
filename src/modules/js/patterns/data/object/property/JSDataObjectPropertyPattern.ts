import JSDataObjectPropertyKeyPattern from "./key/JSDataObjectPropertyKeyPattern";
import JSDataObjectPropertyValuePattern from "./value/JSDataObjectPropertyValuePattern";
import AbstractParserPattern from "../../../../../../core/abstracts/AbstractParserPattern";
import PUNCTSeparatorColonToken from "../../../../../punct/tokens/separator/PUNCTSeparatorColonToken";
import PUNCTSeparatorCommaToken from "../../../../../punct/tokens/separator/PUNCTSeparatorCommaToken";

export default class JSDataObjectPropertyPattern extends AbstractParserPattern
{
    key = undefined as JSDataObjectPropertyKeyPattern | undefined;
    value = undefined as JSDataObjectPropertyValuePattern | undefined;
    separator = {
        colon: undefined as PUNCTSeparatorColonToken | undefined,
        comma: undefined as PUNCTSeparatorCommaToken | undefined,
    };

    properties = () => [
        'key',
        'value',
        {
            'separator': ['colon', 'comma'],
        },
    ];

    pattern = () => [
        {
            name: 'key',
            required: true,
            element: JSDataObjectPropertyKeyPattern,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'separator.colon',
            required: true,
            element: PUNCTSeparatorColonToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'value',
            required: true,
            element: JSDataObjectPropertyValuePattern,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'separator.comma',
            required: false,
            element: PUNCTSeparatorCommaToken,
        },
    ];
};
