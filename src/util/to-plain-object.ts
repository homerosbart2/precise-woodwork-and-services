interface StringObject {
    [key: string]: string | StringObject;
}

export const toPlainObject = (stringObject: StringObject, prefixKey?: string) => {
    return Object.keys(stringObject).reduce(
        (acc: { [key: string]: string }, key) => {
            const value = stringObject[key];
            const newKey = prefixKey ? `${prefixKey}.${key}` : key;

            if (typeof value === 'string') {
                acc[newKey] = value;
            } else {
                acc = {
                    ...acc,
                    ...toPlainObject(value, newKey),
                };
            }

            return acc;
        },
        {},
    );
}