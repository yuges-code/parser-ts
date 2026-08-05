import JSLoopBodyPattern from "../body/JSLoopBodyPattern";
import JSInstructionPattern from "../../JSInstructionPattern";
import JSLoopWhileConditionPattern from "./condition/JSLoopWhileConditionPattern";
import AbstractParserPattern from "../../../../../core/abstracts/AbstractParserPattern";
import JSLoopWhileKeywordToken from "../../../tokens/loop/while/keyword/JSLoopWhileKeywordToken";

export default class JSLoopWhilePattern extends AbstractParserPattern
{
    keyword = undefined as JSLoopWhileKeywordToken | undefined;
    condition = undefined as JSLoopWhileConditionPattern | undefined;
    body = undefined as JSLoopBodyPattern | undefined;

    properties = () => [
        'keyword',
        'condition',
        'body',
    ];

    pattern = () => [
        {
            name: 'keyword',
            required: true,
            element: JSLoopWhileKeywordToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'condition',
            required: true,
            element: JSLoopWhileConditionPattern,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'body',
            required: true,
            element: JSLoopBodyPattern,
        }, {
            name: 'body',
            required: () => this.body === undefined,
            disabled: () => this.body != undefined,
            element: JSInstructionPattern,
        },
    ];
};
