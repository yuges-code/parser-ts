import AbstractParserPattern from "../../../../../../core/abstracts/AbstractParserPattern";
import JSExpressionBinaryPattern from "../../../expression/binary/JSExpressionBinaryPattern";
import JSExpressionDeclarationPattern from "../../../expression/declaration/JSExpressionDeclarationPattern";
import JSExpressionClosingQuoteToken from "../../../../tokens/expression/quote/JSExpressionClosingQuoteToken";
import JSExpressionOpeningQuoteToken from "../../../../tokens/expression/quote/JSExpressionOpeningQuoteToken";
import JSLoopForConditionSeparatorToken from "../../../../tokens/loop/for/condition/separator/JSLoopForConditionSeparatorToken";

export default class JSLoopForConditionPattern extends AbstractParserPattern
{
    openingQuote = undefined as JSExpressionOpeningQuoteToken | undefined;
    initialization = undefined as JSExpressionBinaryPattern | JSExpressionDeclarationPattern | undefined;
    separatorOne = undefined as JSLoopForConditionSeparatorToken | undefined;
    condition = undefined as JSExpressionBinaryPattern | undefined;
    separatorTwo = undefined as JSLoopForConditionSeparatorToken | undefined;
    expression = undefined as JSExpressionBinaryPattern | undefined;
    closingQuote = undefined as JSExpressionClosingQuoteToken | undefined;

    properties = () => [
        'openingQuote',
        'initialization',
        'separatorOne',
        'condition',
        'separatorTwo',
        'expression',
        'closingQuote',
    ];

    pattern = () => [
        {
            name: 'openingQuote',
            required: true,
            element: JSExpressionOpeningQuoteToken,
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
            name: 'separatorOne',
            required: true,
            element: JSLoopForConditionSeparatorToken,
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
            name: 'separatorTwo',
            required: true,
            element: JSLoopForConditionSeparatorToken,
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
            name: 'closingQuote',
            required: true,
            element: JSExpressionClosingQuoteToken,
        },
    ];
};
