
const driver={key:" "};
function updateDriverWithKeyAndValue(driver,key,value){
  let newDriver={...driver};
 // newDriver.concat(driver);
  newDriver[key]=value;
  return newDriver ;
}
function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
 driver[key] = value;
 return driver ;
}
function deleteFromDriverByKey(driver,key){
   driver={key:"value"};
  let anotherDriver=Object.assign({},driver) ;
  delete anotherDriver['key'] ;
  return anotherDriver ;
}
function destructivelyDeleteFromDriverByKey(driver,key){
 // driver={key:"value"};
  delete driver[key];
  return driver;
}