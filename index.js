function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let index = 0; index < collection.length; index++) {
            callback(collection[index], index, collection);
        }
    } else {
        for (const key in collection) {
            if (collection.hasOwnProperty(key)) {
                callback(collection[key], key, collection);
            }
        }
    }
    return collection;
}


function myMap(collection, callback) {
    const results = [];
    if (Array.isArray(collection)) {
        for (let index = 0; index < collection.length; index++) {
            results.push(callback(collection[index], index, collection));
        }
    } else {
        for (const key in collection) {
            if (collection.hasOwnProperty(key)) {
                results.push(callback(collection[key], key, collection));
            }
        }
    }
    return results;
}

function myReduce(collection, callback, accumulator) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let startIdx = 0;
    if (accumulator === undefined) {
        accumulator = values[0];
        startIdx = 1;
    }
    for (let index = startIdx; index < values.length; index++) {
        accumulator = callback(accumulator, values[index], collection);
    }
    return accumulator;
}


function myFind(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let index = 0; index < values.length; index++) {
        if (predicate(values[index])) {
            return values[index];
        }
    }
    return undefined;
}


function myFilter(collection, predicate) {
    const results = [];
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let index = 0; index < values.length; index++) {
        if (predicate(values[index])) {
            results.push(values[index]);
        }
    }
    return results;
}

function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else {
        return Object.keys(collection).length;
    }
}

function myFirst(array, n) {
    if (n === undefined) {
        return array[0];
    } else {
        return array.slice(0, n);
    }
}

function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1];
    } else {
        return array.slice(-n);
    }
}
function myKeys(object) {
    const keys = [];
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
}

function myValues(object) {
    const values = [];
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            values.push(object[key]);
        }
    }
    return values;
}

