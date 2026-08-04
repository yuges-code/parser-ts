import JSNodePattern from "../patterns/JSNodePattern";
import AbstractParserPatternCollection from "../../../core/abstracts/AbstractParserPatternCollection";

export default class JSInstructionCollection extends AbstractParserPatternCollection
{
    skip = () => /[\s;]/;

    pattern = () => JSNodePattern;
};
