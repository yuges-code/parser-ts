import AbstractParserPattern from "../../../../../../core/abstracts/AbstractParserPattern";
import JSConditionBodyOpeningQuoteToken from "../../../../tokens/condition/body/quote/JSConditionBodyOpeningQuoteToken";
import JSConditionBodyClosingQuoteToken from "../../../../tokens/condition/body/quote/JSConditionBodyClosingQuoteToken";
import JSConditionSwitchCaseCollection from "../../../../collections/condition/switch/case/JSConditionSwitchCaseCollection";

export default class JSConditionSwitchBodyPattern extends AbstractParserPattern
{
    openingQuote = undefined as JSConditionBodyOpeningQuoteToken | undefined;
    cases = undefined as JSConditionSwitchCaseCollection | undefined;
    closingQuote = undefined as JSConditionBodyClosingQuoteToken | undefined;

    properties = () => [
        'openingQuote',
        'cases',
        'closingQuote',
    ];

    pattern = () => [
        {
            name: 'openingQuote',
            required: true,
            element: JSConditionBodyOpeningQuoteToken,
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
            name: 'closingQuote',
            required: true,
            element: JSConditionBodyClosingQuoteToken,
        },
    ];
};
