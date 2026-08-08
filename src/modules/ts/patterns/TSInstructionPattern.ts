import JSLoopForPattern from "../../js/patterns/loop/for/JSLoopForPattern";
import JSLoopWhilePattern from "../../js/patterns/loop/while/JSLoopWhilePattern";
import AbstractParserPattern from "../../../core/abstracts/AbstractParserPattern";
import JSConditionIfPattern from "../../js/patterns/condition/if/JSConditionIfPattern";
import JSModuleExportPattern from "../../js/patterns/module/export/JSModuleExportPattern";
import JSModuleImportPattern from "../../js/patterns/module/import/JSModuleImportPattern";
import JSConditionSwitchPattern from "../../js/patterns/condition/switch/JSConditionSwitchPattern";
import JSExpressionBreakPattern from "../../js/patterns/expression/break/JSExpressionBreakPattern";
import JSExpressionReturnPattern from "../../js/patterns/expression/return/JSExpressionReturnPattern";
import JSExpressionBinaryPattern from "../../js/patterns/expression/binary/JSExpressionBinaryPattern";
import JSExpressionDeclarationPattern from "../../js/patterns/expression/declaration/JSExpressionDeclarationPattern";

export default class TSInstructionPattern extends AbstractParserPattern
{
    morphs = () => [
        JSModuleImportPattern,
        JSModuleExportPattern,
        JSConditionIfPattern,
        JSConditionSwitchPattern,
        JSExpressionBreakPattern,
        JSExpressionReturnPattern,
        JSExpressionDeclarationPattern,
        JSLoopForPattern,
        JSLoopWhilePattern,
        JSExpressionBinaryPattern,

        // comment
    ];
};
