// You'll be writing four functions:
// * `updateDriverWithKeyAndValue()`- this function should take in a `driver` object, a `key` and a `value`. The function should not mutate the `driver` parameter and return a new `driver` that has an updated `value` for the `key` passed in.
// * `destructivelyUpdateDriverWithKeyAndValue()` - this function should work the same as `updateDriverWithKeyAndValue()` but it *should* mutate the `driver` parameter passed in.
// * `deleteFromDriverByKey()` - this function should take in a `driver` object and a `key`. It should delete the `key`/`value` pair for the `key` that was passed in from the `driver` object. This should all not actually mutate the `driver` passed in.
// * `destructivelyDeleteFromDriverByKey()` - this function should work the same as `deleteFromDriverByKey()` but it *should* mutate the `driver` passed in.
//
let driver = {}

function updateDriverWithKeyAndValue(driver,key,value){
    let newObj = { ...driver };
    newObj[key] = value;
    return newObj

}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key){

    let newObj = { ...driver };
    delete newObj.key
    return key
}

function destructivelyDeleteFromDriverByKey(driver,key){

    delete driver[key]

    return driver

}
