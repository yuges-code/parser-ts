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
import PUNCTBracketRoundOpenToken from "../../../../punct/tokens/bracket/round/PUNCTBracketRoundOpenToken";
import PUNCTBracketRoundCloseToken from "../../../../punct/tokens/bracket/round/PUNCTBracketRoundCloseToken";
import JSOperatorAssignmentArithmeticPattern from "../../operator/assignment/JSOperatorAssignmentArithmeticPattern";

export default class JSExpressionBinaryPattern extends AbstractParserPattern
{
    bracket = {
        open: undefined as PUNCTBracketRoundOpenToken | undefined,
        close: undefined as PUNCTBracketRoundCloseToken | undefined,
    };

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

    properties = () => [
        'expression',
        'left',
        'operator',
        'right',
        {
            'bracket': ['open', 'close'],
        },
    ];

    pattern = () => [
        {
            name: 'left',
            required: false,
            element: JSDataFunctionArrowPattern,
        },{
            name: 'bracket.open',
            required: false,
            element: PUNCTBracketRoundOpenToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'expression',
            required: () => this.bracket.open != undefined,
            disabled: () => this.bracket.open === undefined,
            element: JSExpressionBinaryPattern,
        }, {
            name: 'bracket.close',
            required: () => this.expression != undefined,
            disabled: () => this.expression === undefined,
            element: PUNCTBracketRoundCloseToken,
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
            name: 'bracket.close',
            required: () => this.bracket.open != undefined && this.bracket.close === undefined,
            disabled: () => this.bracket.open === undefined || this.bracket.close != undefined,
            element: PUNCTBracketRoundCloseToken,
        },
    ];
};
