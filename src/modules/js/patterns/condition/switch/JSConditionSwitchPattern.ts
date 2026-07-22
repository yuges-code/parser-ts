import JSConditionPattern from "../JSConditionPattern";
import AbstractParserPattern from "../../../../../core/abstracts/AbstractParserPattern";
import JSConditionSwitchKeywordToken from "../../../tokens/condition/switch/keyword/JSConditionSwitchKeywordToken";
import JSConditionSwitchBodyPattern from "./body/JSConditionSwitchBodyPattern";

export default class JSConditionSwitchPattern extends AbstractParserPattern
{
    keyword = undefined as JSConditionSwitchKeywordToken | undefined;
    condition = undefined as JSConditionPattern | undefined;
    body = undefined as JSConditionSwitchBodyPattern | undefined;

    properties = () => [
        'keyword',
        'condition',
        'body',
    ];

    pattern = () => [
        {
            name: 'keyword',
            required: true,
            element: JSConditionSwitchKeywordToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'condition',
            required: true,
            element: JSConditionPattern,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'body',
            required: true,
            element: JSConditionSwitchBodyPattern,
        },
    ];
};
