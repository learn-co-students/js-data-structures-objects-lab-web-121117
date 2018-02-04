// Write your solution in this file!

const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = Object.assign({}, driver)
  delete newDriver[key]
  return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}






// updateDriverWithKeyAndValue()- this function should take in a driver object, a key and a value. The function should not mutate the driver parameter and return a new driver that has an updated value for the key passed in.

// destructivelyUpdateDriverWithKeyAndValue() - this function should work the same as updateDriverWithKeyAndValue() but it should mutate the driver parameter passed in.

// deleteFromDriverByKey() - this function should take in a driver object and a key. It should delete the key/value pair for the key that was passed in from the driver object. This should all not actually mutate the driver passed in.

// destructivelyDeleteFromDriverByKey() - this function should work the same as deleteFromDriverByKey() but it should mutate the driver passed in.
