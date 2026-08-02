import JSVariableNameToken from "../../../../tokens/variable/name/JSVariableNameToken";
import AbstractParserPattern from "../../../../../../core/abstracts/AbstractParserPattern";
import PUNCTSignAsteriskToken from "../../../../../punct/tokens/sign/PUNCTSignAsteriskToken";
import JSModuleAsKeywordToken from "../../../../tokens/module/as/keyword/JSModuleAsKeywordToken";
import PUNCTSeparatorCommaToken from "../../../../../punct/tokens/separator/PUNCTSeparatorCommaToken";

export default class JSModuleImportIdentifierPattern extends AbstractParserPattern
{
    identifier = undefined as JSVariableNameToken | undefined;
    all = undefined as PUNCTSignAsteriskToken | undefined;
    as = undefined as JSModuleAsKeywordToken | undefined;
    alias = undefined as JSVariableNameToken | undefined;
    separator = undefined as PUNCTSeparatorCommaToken | undefined;


    properties = () => [
        'identifier',
        'all',
        'as',
        'alias',
        'separator',
    ];

    pattern = () => [
        {
            name: 'identifier',
            required: false,
            element: JSVariableNameToken,
        }, {
            name: 'all',
            required: () => this.identifier === undefined,
            disabled: () => this.identifier != undefined,
            element: PUNCTSignAsteriskToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'as',
            required: () => this.all != undefined,
            element: JSModuleAsKeywordToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'alias',
            required: () => this.as != undefined,
            disabled: () => this.as === undefined,
            element: JSVariableNameToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'separator',
            required: false,
            element: PUNCTSeparatorCommaToken,
        },
    ];
};
