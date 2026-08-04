import AbstractParserPatternCollection from "../../../../../../core/abstracts/AbstractParserPatternCollection";
import HTMLElementTagAttributePattern from "../../../../patterns/element/tag/attribute/HTMLElementTagAttributePattern";

export default class HTMLElementTagAttributeCollection extends AbstractParserPatternCollection
{
    items = [] as HTMLElementTagAttributePattern[];

    pattern = () => HTMLElementTagAttributePattern;
};
