import AbstractParserPattern from "../../../../../../../core/abstracts/AbstractParserPattern";
import JSExpressionBinaryPattern from "../../../../expression/binary/JSExpressionBinaryPattern";


export default class JSDataObjectPropertyValuePattern extends AbstractParserPattern
{
    morphs = () => [
        JSExpressionBinaryPattern
    ];
};
