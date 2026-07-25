import AbstractParserToken from "../abstracts/AbstractParserToken";
import AbstractParserPattern from "../abstracts/AbstractParserPattern";
import AbstractParserPatternCollection from "../abstracts/AbstractParserPatternCollection";

type Constructor<T = {}> = new (...args: any[]) => T;

export type Properties = (string | {[key: string]: Properties})[];

export default function Propertyable<T extends Constructor>(base: T)
{
    return class extends base
    {
        properties(): Properties
        {
            return [];
        };

        setProperty(
            name: string,
            value:
                AbstractParserToken |
                AbstractParserPattern |
                AbstractParserPatternCollection
        ): this
        {
            return this.setNestedProperty(name, value);
        };

        hasProperty(name: string)
        {
            const names = name.split('.');

            return this.hasNestedProperty(...names);
        };

        hasNestedProperty(...keys: string[]): boolean
        {
            if (!keys || keys.length === 0) {
                return false;
            }

            let current = this as Record<string, any>;

            for (const key of keys) {
                if (! (key in current) || typeof current[key] !== 'object') {
                    return false;
                }

                current = current[key];
            }

            return true;
        };

        setNestedProperty(path: string, value: any): this
        {
            const keys = path.split('.');

            if (!keys || keys.length === 0) {
                return this;
            }

            let current = this as Record<string, any>;

            for (const key of keys) {
                if (! (key in current)) {
                    break;
                }

                if (typeof current[key] === 'object') {
                    current = current[key];
                }
            }

            const key  = keys[keys.length - 1];

            if (key in current) {
                current[key] = value;
            }

            return this;
        };
    };
};
