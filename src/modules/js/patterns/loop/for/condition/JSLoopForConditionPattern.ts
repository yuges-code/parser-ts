import AbstractParserPattern from "../../../../../../core/abstracts/AbstractParserPattern";
import JSExpressionBinaryPattern from "../../../expression/binary/JSExpressionBinaryPattern";
import JSExpressionDeclarationPattern from "../../../expression/declaration/JSExpressionDeclarationPattern";
import PUNCTBracketRoundOpenToken from "../../../../../punct/tokens/bracket/round/PUNCTBracketRoundOpenToken";
import PUNCTSeparatorSemicolonToken from "../../../../../punct/tokens/separator/PUNCTSeparatorSemicolonToken";
import PUNCTBracketRoundCloseToken from "../../../../../punct/tokens/bracket/round/PUNCTBracketRoundCloseToken";

export default class JSLoopForConditionPattern extends AbstractParserPattern
{
    bracket = {
        open: undefined as PUNCTBracketRoundOpenToken | undefined,
        close: undefined as PUNCTBracketRoundCloseToken | undefined,
    };
    separator = {
        first: undefined as PUNCTSeparatorSemicolonToken | undefined,
        second: undefined as PUNCTSeparatorSemicolonToken | undefined,
    }

    initialization = undefined as
        undefined |
        JSExpressionBinaryPattern |
        JSExpressionDeclarationPattern;
    condition = undefined as JSExpressionBinaryPattern | undefined;
    expression = undefined as JSExpressionBinaryPattern | undefined;

    properties = () => [
        'initialization',
        'condition',
        'expression',
        {
            'bracket': ['open', 'close'],
            'separator': ['first', 'second'],
        },
    ];

    pattern = () => [
        {
            name: 'bracket.open',
            required: true,
            element: PUNCTBracketRoundOpenToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'initialization',
            required: true,
            element: JSExpressionDeclarationPattern,
        }, {
            name: 'initialization',
            required: () => this.initialization === undefined,
            disabled: () => this.initialization != undefined,
            element: JSExpressionBinaryPattern,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'separator.first',
            required: true,
            element: PUNCTSeparatorSemicolonToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'condition',
            required: true,
            element: JSExpressionBinaryPattern,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'separator.second',
            required: true,
            element: PUNCTSeparatorSemicolonToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'expression',
            required: true,
            element: JSExpressionBinaryPattern,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'bracket.close',
            required: true,
            element: PUNCTBracketRoundCloseToken,
        },
    ];
};
