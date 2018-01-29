// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {[key]: value})
}

function deleteFromDriverByKey(driver, key) {
  const newOb = Object.assign({}, driver)
  delete newOb[key]
  return newOb
}

function destructivelyDeleteFromdriverByKey(driver, key) {
  var value = undefined
  Object.assign(driver, {[key]: value})
  return driver
}
