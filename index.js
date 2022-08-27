function standadizedInput(collection){
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
}

function myEach(collection, callback){
    const newCollection = standadizedInput(collection);
    newCollection.forEach(callback);
    return collection
}

function myMap(collection, callback){
    const newCollection = standadizedInput(collection);
    let newArray = [];

    for(const item of newCollection){
        newArray.push(callback(item));
    }

    return newArray;
}


function myReduce(collection, callback, acc){
    let newCollection = standadizedInput(collection);
    if (!acc) {
       acc = newCollection[0];
       newCollection = newCollection.slice(1);
    }
    return newCollection.reduce(callback, acc);
}

function myFind(collection, predicate){
    const newCollection = standadizedInput(collection);

    return newCollection.find(predicate);
}

function myFilter(collection, predicate){
    const newCollection = standadizedInput(collection);

    return newCollection.filter(predicate);
}

function mySize(collection){
    const newCollection= standadizedInput(collection);

    return newCollection.length;
}

function myFirst(array, n) {
    return (n) ? array.slice(0, n) : array[0];
}

function myLast(array, n){
    return (n) ? array.slice(array.length - n, array.length) : array[array.length-1];

}

function myKeys(object){

    return (Object.keys(object));
}

function myValues(object){

    return (Object.values(object));
}