import JSNodePattern from "../../JSNodePattern";
import JSLoopBodyPattern from "../body/JSLoopBodyPattern";
import JSLoopForConditionPattern from "./condition/JSLoopForConditionPattern";
import AbstractParserPattern from "../../../../../core/abstracts/AbstractParserPattern";
import JSLoopForKeywordToken from "../../../tokens/loop/for/keyword/JSLoopForKeywordToken";

export default class JSLoopForPattern extends AbstractParserPattern
{
    keyword = undefined as JSLoopForKeywordToken | undefined;
    condition = undefined as JSLoopForConditionPattern | undefined;
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
            element: JSLoopForKeywordToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'condition',
            required: true,
            element: JSLoopForConditionPattern,
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
            element: JSNodePattern,
        },
    ];
};
