import JSDataObjectPropertyKeyPattern from "./key/JSDataObjectPropertyKeyPattern";
import JSDataObjectPropertyValuePattern from "./value/JSDataObjectPropertyValuePattern";
import JSOperatorCommaToken from "../../../../tokens/operator/comma/JSOperatorCommaToken";
import AbstractParserPattern from "../../../../../../core/abstracts/AbstractParserPattern";
import PUNCTSeparatorColonToken from "../../../../../punct/tokens/separator/PUNCTSeparatorColonToken";

export default class JSDataObjectPropertyPattern extends AbstractParserPattern
{
    key = undefined as JSDataObjectPropertyKeyPattern | undefined;
    separator = undefined as PUNCTSeparatorColonToken | undefined;
    value = undefined as JSDataObjectPropertyValuePattern | undefined;
    operator = undefined as JSOperatorCommaToken | undefined;

    properties = () => [
        'key',
        'separator',
        'value',
        'operator',
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
            name: 'separator',
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
            name: 'operator',
            required: false,
            element: JSOperatorCommaToken,
        },
    ];
};
