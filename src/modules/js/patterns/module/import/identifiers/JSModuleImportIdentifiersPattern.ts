import AbstractParserPattern from "../../../../../../core/abstracts/AbstractParserPattern";
import JSModuleImportIdentifierPattern from "../identifier/JSModuleImportIdentifierPattern";
import PUNCTBracketCurlyOpenToken from "../../../../../punct/tokens/bracket/curly/PUNCTBracketCurlyOpenToken";
import PUNCTBracketCurlyCloseToken from "../../../../../punct/tokens/bracket/curly/PUNCTBracketCurlyCloseToken";
import JSModuleImportIdentifierCollection from "../../../../collections/module/import/identifier/JSModuleImportIdentifierCollection";

export default class JSModuleImportIdentifiersPattern extends AbstractParserPattern
{
    bracket = {
        open: undefined as PUNCTBracketCurlyOpenToken | undefined,
        close: undefined as PUNCTBracketCurlyCloseToken | undefined,
    };
    values = undefined as
        undefined |
        JSModuleImportIdentifierPattern |
        JSModuleImportIdentifierCollection;

    properties = () => [
        'values',
        {
            'bracket': ['open', 'close'],
        },
    ];

    pattern = () => [
        {
            name: 'bracket.open',
            required: false,
            element: PUNCTBracketCurlyOpenToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'values',
            required: true,
            element: () => this.bracket.open === undefined
                ? JSModuleImportIdentifierPattern
                : JSModuleImportIdentifierCollection,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'bracket.close',
            required: () => this.bracket.open != undefined,
            disabled: () => this.bracket.open === undefined,
            element: PUNCTBracketCurlyCloseToken,
        },
    ];
};
