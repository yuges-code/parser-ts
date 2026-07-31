import AbstractParserPattern from "../../../../../../core/abstracts/AbstractParserPattern";
import PUNCTBracketCurlyOpenToken from "../../../../../punct/tokens/bracket/curly/PUNCTBracketCurlyOpenToken";
import PUNCTBracketCurlyCloseToken from "../../../../../punct/tokens/bracket/curly/PUNCTBracketCurlyCloseToken";
import JSConditionSwitchCaseCollection from "../../../../collections/condition/switch/case/JSConditionSwitchCaseCollection";

export default class JSConditionSwitchBodyPattern extends AbstractParserPattern
{
    bracket = {
        open: undefined as PUNCTBracketCurlyOpenToken | undefined,
        close: undefined as PUNCTBracketCurlyCloseToken | undefined,
    }
    cases = undefined as JSConditionSwitchCaseCollection | undefined;

    properties = () => [
        'cases',
        {
            'bracket': ['open', 'close'],
        },
    ];

    pattern = () => [
        {
            name: 'bracket.open',
            required: true,
            element: PUNCTBracketCurlyOpenToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'cases',
            required: false,
            element: JSConditionSwitchCaseCollection,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'bracket.close',
            required: true,
            element: PUNCTBracketCurlyCloseToken,
        },
    ];
};
