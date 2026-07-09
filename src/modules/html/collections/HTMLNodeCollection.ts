import HTMLNodePattern from "../patterns/HTMLNodePattern";
import AbstractParserPatternCollection from "../../../core/abstracts/AbstractParserPatternCollection";

export default class HTMLNodeCollection extends AbstractParserPatternCollection
{
    pattern = () => HTMLNodePattern;
};
