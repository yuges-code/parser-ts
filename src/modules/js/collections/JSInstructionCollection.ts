import JSInstructionPattern from "../patterns/JSInstructionPattern";
import AbstractParserPatternCollection from "../../../core/abstracts/AbstractParserPatternCollection";

export default class JSInstructionCollection extends AbstractParserPatternCollection
{
    skip = () => /[\s;]/;

    pattern = () => JSInstructionPattern;
};
