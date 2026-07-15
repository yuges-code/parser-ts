import JSVariablePattern from "../../variable/JSVariablePattern";
import JSExpressionUnaryPattern from "../unary/JSExpressionUnaryPattern";
import JSOperatorShiftPattern from "../../operator/shift/JSOperatorShiftPattern";
import JSOperatorBinaryPattern from "../../operator/binary/JSOperatorBinaryPattern";
import JSOperatorBitwisePattern from "../../operator/bitwise/JSOperatorBitwisePattern";
import JSOperatorLogicalPattern from "../../operator/logical/JSOperatorLogicalPattern";
import AbstractParserPattern from "../../../../../core/abstracts/AbstractParserPattern";
import JSDataFunctionArrowPattern from "../../data/function/arrow/JSDataFunctionArrowPattern";
import JSOperatorAssignmentPattern from "../../operator/assignment/JSOperatorAssignmentPattern";
import JSOperatorComparisonPattern from "../../operator/comparison/JSOperatorComparisonPattern";
import JSOperatorArithmeticPattern from "../../operator/arithmetic/JSOperatorArithmeticPattern";
import JSExpressionClosingQuoteToken from "../../../tokens/expression/quote/JSExpressionClosingQuoteToken";
import JSExpressionOpeningQuoteToken from "../../../tokens/expression/quote/JSExpressionOpeningQuoteToken";
import JSOperatorAssignmentArithmeticPattern from "../../operator/assignment/JSOperatorAssignmentArithmeticPattern";

export default class JSExpressionBinaryPattern extends AbstractParserPattern
{
    openingQuote = undefined as JSExpressionOpeningQuoteToken | undefined;
    expression = undefined as JSExpressionBinaryPattern | undefined;
    left = undefined as JSVariablePattern | JSExpressionUnaryPattern | JSDataFunctionArrowPattern | undefined;

    operator = undefined as 
        JSOperatorAssignmentArithmeticPattern |
        JSOperatorShiftPattern |
        JSOperatorComparisonPattern |
        JSOperatorArithmeticPattern |
        JSOperatorAssignmentPattern |
        JSOperatorLogicalPattern |
        JSOperatorBitwisePattern |
        undefined;

    right = undefined as JSExpressionBinaryPattern | undefined;
    closingQuote = undefined as JSExpressionClosingQuoteToken | undefined;

    properties = () => [
        'openingQuote',
        'expression',
        'left',
        'operator',
        'right',
        'closingQuote',
    ];

    pattern = () => [
        {
            name: 'left',
            required: false,
            element: JSDataFunctionArrowPattern,
        },{
            name: 'openingQuote',
            required: false,
            element: JSExpressionOpeningQuoteToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'expression',
            required: () => this.openingQuote != undefined,
            disabled: () => this.openingQuote === undefined,
            element: JSExpressionBinaryPattern,
        }, {
            name: 'closingQuote',
            required: () => this.expression != undefined,
            disabled: () => this.expression === undefined,
            element: JSExpressionClosingQuoteToken,
        }, {
            name: 'left',
            required: false,
            disabled: () => this.expression != undefined || this.left != undefined,
            element: JSExpressionUnaryPattern,
        }, {
            name: 'left',
            required: () => this.expression === undefined && this.left === undefined,
            disabled: () => this.expression != undefined || this.left != undefined,
            element: JSVariablePattern,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'operator',
            required: false,
            element: JSOperatorBinaryPattern,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'right',
            required: () => this.operator != undefined &&
                    !['++', '--', '**'].includes(this.operator?.operator?.lexeme || ''),
            disabled: () => this.operator === undefined,
            element: JSExpressionBinaryPattern,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'closingQuote',
            required: () => this.openingQuote != undefined && this.closingQuote === undefined,
            disabled: () => this.openingQuote === undefined || this.closingQuote != undefined,
            element: JSExpressionClosingQuoteToken,
        },
    ];
};
