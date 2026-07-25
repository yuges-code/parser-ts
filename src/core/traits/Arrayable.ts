import Propertyable, { type Properties } from "./Propertyable";

type Constructor<T = {}> = new (...args: any[]) => T;

export default function Arrayable<T extends Constructor>(base: T)
{
    return class extends (Propertyable(base))
    {
        toArray(options?: any)
        {
            const properties = this.properties();

            return this.toNestedArray(properties);
        };

        toNestedArray(properties: Properties, current = this as Record<string, any>)
        {
            var array = {} as Record<string, any>;

            if (typeof properties !== 'object') {
                return [];
            }

            properties.forEach((property) => {
                if (typeof property === 'string') {
                    if (typeof current[property]?.toArray === 'function') {
                        array[property] = current[property].toArray();
                    } else {
                        array[property] = current[property];
                    }
                } else {
                    for (var key in property) {
                        array[key] = this.toNestedArray(property[key], current[key]);
                    }
                }
            });

            return array;
        }
    };
};
