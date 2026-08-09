import HTMLTextPattern from "../../html/patterns/text/HTMLTextPattern";
import HTMLCommentPattern from "../../html/patterns/comment/HTMLCommentPattern";
import HTMLElementPattern from "../../html/patterns/element/HTMLElementPattern";
import AbstractParserPattern from "../../../core/abstracts/AbstractParserPattern";

export default class VUENodePattern extends AbstractParserPattern
{
    morphs = () => [
        HTMLTextPattern,
        HTMLElementPattern,
        HTMLCommentPattern,
    ];
};
