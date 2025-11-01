type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function jsonStringify(object: JSONValue): string {
    if (typeof object !== 'object' || object === null) {
        if (typeof object === 'string') {
            return `"${object}"`
        } else {
            return String(object)
        }
    } else if (Array.isArray(object)) {
        const elements = object.map(element => jsonStringify(element));
        return `[${elements.join(',')}]`
    } else {
        const properties = Object.keys(object).map(key => {
            const value = jsonStringify(object[key]);
            return `"${key}":${value}`
        });
        return `{${properties.join(",")}}`
    }
};