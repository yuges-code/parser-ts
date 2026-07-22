import AbstractParserPatternCollection from "../../../../../../core/abstracts/AbstractParserPatternCollection";
import JSConditionSwitchCasePattern from "../../../../patterns/condition/switch/case/JSConditionSwitchCasePattern";

export default class JSConditionSwitchCaseCollection extends AbstractParserPatternCollection
{
    pattern = () => JSConditionSwitchCasePattern;
};
