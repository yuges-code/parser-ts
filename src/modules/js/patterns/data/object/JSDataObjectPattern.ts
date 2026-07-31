import AbstractParserPattern from "../../../../../core/abstracts/AbstractParserPattern";
import PUNCTBracketCurlyOpenToken from "../../../../punct/tokens/bracket/curly/PUNCTBracketCurlyOpenToken";
import PUNCTBracketCurlyCloseToken from "../../../../punct/tokens/bracket/curly/PUNCTBracketCurlyCloseToken";
import JSDataObjectPropertyCollection from "../../../collections/data/object/property/JSDataObjectPropertyCollection";

export default class JSDataObjectPattern extends AbstractParserPattern
{
    bracket = {
        open: undefined as PUNCTBracketCurlyOpenToken | undefined,
        close: undefined as PUNCTBracketCurlyCloseToken | undefined,
    };
    values = undefined as JSDataObjectPropertyCollection | undefined;

    properties = () => [
        'values',
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
            name: 'values',
            required: false,
            element: JSDataObjectPropertyCollection,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'bracket.close',
            required: true,
            element: PUNCTBracketCurlyCloseToken,
        }
    ];
};
