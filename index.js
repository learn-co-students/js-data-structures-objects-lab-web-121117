// Write your solution in this file!


const driver = {};

// The function should not mutate the `driver` parameter and return a new `driver` that has an updated `value` for the `key` passed in

function updateDriverWithKeyAndValue(obj, key, value){
  const newObj = {... obj};
  // the spread operator
  // copies all of the old object's menu properties into the new object
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj;
}

function deleteFromDriverByKey(obj, key){
  newObj = {};
  Object.assign(newObj, obj);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromDriverByKey(obj, key){
  delete obj[key];
  return obj;
}
