type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        const slice = arr.slice(i, i + size);
        result.push(slice);
    }
    return result;
};
