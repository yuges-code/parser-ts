import AbstractParserToken from "../../../../../core/abstracts/AbstractParserToken";
import AbstractParserPattern from "../../../../../core/abstracts/AbstractParserPattern";
import JSDataStringValueToken from "../../../tokens/data/string/value/JSDataStringValueToken";
import PUNCTSpecialBacktickToken from "../../../../punct/tokens/special/PUNCTSpecialBacktickToken";
import PUNCTSpecialQuoteSingleToken from "../../../../punct/tokens/special/quote/PUNCTSpecialQuoteSingleToken";
import PUNCTSpecialQuoteDoubleToken from "../../../../punct/tokens/special/quote/PUNCTSpecialQuoteDoubleToken";

type Bracket =
    PUNCTSpecialBacktickToken |
    PUNCTSpecialQuoteSingleToken |
    PUNCTSpecialQuoteDoubleToken;

export default class JSDataStringPattern extends AbstractParserPattern
{
    bracket = {
        open: undefined as Bracket | undefined,
        close: undefined as Bracket | undefined,
    };
    value = undefined as JSDataStringValueToken | undefined;

    properties = () => [
        'value',
        {
            'bracket': ['open', 'close'],
        },
    ];

    pattern = () => [
        {
            name: 'bracket.open',
            required: true,
            element: [
                PUNCTSpecialBacktickToken,
                PUNCTSpecialQuoteSingleToken,
                PUNCTSpecialQuoteDoubleToken,
            ],
        }, {
            name: 'value',
            required: false,
            element: JSDataStringValueToken,
        }, {
            name: 'bracket.close',
            required: true,
            element: () => this.bracket.open?.constructor as any as typeof AbstractParserToken,
        },
    ];
};
