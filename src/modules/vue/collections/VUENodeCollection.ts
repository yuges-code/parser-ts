import AbstractParserPatternCollection from "../../../core/abstracts/AbstractParserPatternCollection";
import VUENodePattern from "../patterns/VUENodePattern";

export default class VUENodeCollection extends AbstractParserPatternCollection
{
    pattern = () => VUENodePattern;
};
