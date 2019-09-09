// Write your solution in this file!
driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
  new_object = {}
  Object.assign(new_object, driver)
  new_object[key] = value
  return new_object
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key){
  new_driver = {}
  Object.assign(new_driver, driver)
  delete new_driver[key]
  return new_driver
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]
  return driver
}
