import JSNodeCollection from "../../../../collections/JSNodeCollection";
import AbstractParserPattern from "../../../../../../core/abstracts/AbstractParserPattern";
import JSExpressionBinaryPattern from "../../../expression/binary/JSExpressionBinaryPattern";
import JSConditionSwitchCaseKeywordToken from "../../../../tokens/condition/switch/case/keyword/JSConditionSwitchCaseKeywordToken";
import JSConditionSwitchCaseSeparatorToken from "../../../../tokens/condition/switch/case/separator/JSConditionSwitchCaseSeparatorToken";
import JSConditionSwitchDefaultKeywordToken from "../../../../tokens/condition/switch/default/keyword/JSConditionSwitchDefaultKeywordToken";

export default class JSConditionSwitchCasePattern extends AbstractParserPattern
{
    keyword = undefined as
        JSConditionSwitchCaseKeywordToken |
        JSConditionSwitchDefaultKeywordToken |
        undefined;

    expression = undefined as JSExpressionBinaryPattern | undefined;
    separator = undefined as JSConditionSwitchCaseSeparatorToken | undefined;

    properties = () => [
        'keyword',
        'expression',
        'separator',
    ];

    pattern = () => [
        {
            name: 'keyword',
            required: false,
            element: JSConditionSwitchCaseKeywordToken,
        }, {
            name: 'keyword',
            required: () => this.keyword === undefined,
            disabled: () => this.keyword != undefined,
            element: JSConditionSwitchDefaultKeywordToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'expression',
            required: () => this.keyword?.lexeme === 'case',
            element: JSExpressionBinaryPattern,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'separator',
            required: true,
            element: JSConditionSwitchCaseSeparatorToken,
        }, {
            name: 'instructions',
            required: true,
            element: JSNodeCollection,
        },
    ];
};
