import JSLoopForPattern from "./loop/for/JSLoopForPattern";
import JSLoopWhilePattern from "./loop/while/JSLoopWhilePattern";
import JSConditionIfPattern from "./condition/if/JSConditionIfPattern";
import JSModuleImportPattern from "./module/import/JSModuleImportPattern";
import JSModuleExportPattern from "./module/export/JSModuleExportPattern";
import AbstractParserPattern from "../../../core/abstracts/AbstractParserPattern";
import JSExpressionBinaryPattern from "./expression/binary/JSExpressionBinaryPattern";
import JSExpressionDeclarationPattern from "./expression/declaration/JSExpressionDeclarationPattern";

export default class JSNodePattern extends AbstractParserPattern
{
    morphs = () => [
        JSModuleImportPattern,
        JSModuleExportPattern,
        JSConditionIfPattern,
        JSExpressionDeclarationPattern,
        JSLoopForPattern,
        JSLoopWhilePattern,
        JSExpressionBinaryPattern,

        // switch
        // comment
    ];
};
