import AbstractParserPattern from "../../../../../core/abstracts/AbstractParserPattern";
import JSExpressionBinaryPattern from "../../expression/binary/JSExpressionBinaryPattern";
import PUNCTSeparatorCommaToken from "../../../../punct/tokens/separator/PUNCTSeparatorCommaToken";

export default class JSDataArrayValuePattern extends AbstractParserPattern
{
    expression = undefined as JSExpressionBinaryPattern | undefined;
    separator = undefined as PUNCTSeparatorCommaToken | undefined;

    properties = () => [
        'expression',
        'separator',
    ];

    pattern = () => [
        {
            name: 'expression',
            required: true,
            element: JSExpressionBinaryPattern,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'separator',
            required: false,
            element: PUNCTSeparatorCommaToken,
        },
    ];
};
