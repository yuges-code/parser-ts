import JSNodePattern from "../../js/patterns/JSNodePattern";
import AbstractParserPatternCollection from "../../../core/abstracts/AbstractParserPatternCollection";

export default class TSInstructionCollection extends AbstractParserPatternCollection
{
    skip = () => /[\s;]/;

    pattern = () => JSNodePattern;
};
