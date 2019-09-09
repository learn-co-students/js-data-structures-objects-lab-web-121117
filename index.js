// Write your solution in this file!
const driver = {};

// The function should not mutate the driver parameter and return a new driver that has an updated value for the key passed in.
function updateDriverWithKeyAndValue(obj, key, value){
  const new_obj = {...obj};
  new_obj[key] = value;
  return new_obj;
}
// this function should work the same as updateDriverWithKeyAndValue() but it should mutate the driver parameter passed in.
function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj;
}
// this function should take in a driver object and a key. It should delete the key/value pair for the key that was passed in from the driver object. This should all not actually mutate the driver passed in.
function deleteFromDriverByKey(obj, key){
  const new_obj = {...obj};
  delete new_obj[key];
  return new_obj;
}
// this function should work the same as deleteFromDriverByKey() but it should mutate the driver passed in
function destructivelyDeleteFromDriverByKey(obj, key){
  delete obj[key];
  return obj;
}
