import AbstractParserPatternCollection from "../../../../../../core/abstracts/AbstractParserPatternCollection";
import JSDataFunctionArgumentPattern from "../../../../patterns/data/function/argument/JSDataFunctionArgumentPattern";

export default class JSDataFunctionArgumentCollection extends AbstractParserPatternCollection
{
    pattern = () => JSDataFunctionArgumentPattern;
};
