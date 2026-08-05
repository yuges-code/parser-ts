import TSInstructionPattern from "../patterns/TSInstructionPattern";
import AbstractParserPatternCollection from "../../../core/abstracts/AbstractParserPatternCollection";

export default class TSInstructionCollection extends AbstractParserPatternCollection
{
    skip = () => /[\s;]/;

    pattern = () => TSInstructionPattern;
};
