let basicData = {
  count: 10,
  min: 1,
  max: 10,
  divideNumber: 5
}

function exampleOne(count, min, max){
  let exampleArr = [];
  let val = 0;

  for(let i = 0; i < count; i++){
    val = Math.random() * (max - min) + min;
    exampleArr[i] = Number(val.toFixed(2));
  }
  return exampleArr;
}
// console.log(typeof(one[0]));
let one = exampleOne(basicData.count, basicData.min, basicData.max);
console.log(`exampleOne: ${one}`);

function exampleTwo(array, divideNumber){
  let exampleObject = {
    a: [],
    b: []
  }

  if(!Number.isInteger(divideNumber)){
    return "정수를 입력해주세요"
  }
  else{
    for(let i = 0; i < array.length; i++){
      if(array[i] < divideNumber){
        exampleObject.a.push(array[i]);
      }
      else{
        exampleObject.b.push(array[i]);
      }
      // console.log(exampleObject)
    }
    return exampleObject;
  }
}
let two = exampleTwo(one, basicData.divideNumber);
console.log(`exampleTwo: ${two}`);

function exampleThree(array){
  let value = 0;
  for(let i = 0; i < array.length; i++){
    value += array[i];
  }

  return value;
}
console.log(`exampleThree: ${exampleThree(one)}`)

function exampleFour(object){
  let value = 0;

  if(typeof(object) === "object"){
    for(key in object){
      if(Array.isArray(object[key])){
        for(let i = 0; i < object[key].length; i++){
          if(typeof(object[key][i] === "number")){
            value = true;
          }
          else{
            value = false;
          }
        }
      }
    }
  }

  return value;
}
console.log(`exampleFour: ${exampleFour(two)}`)

function exampleFive(objectOne, objectTwo){
  let value;
  let sumOne = 0;
  let sumTwo = 0;

  for(i in objectOne){
    sumOne += objectOne[i];
  }

  for(key in objectTwo) {
    for(let i = 0; i < objectTwo[key].length; i++){
      sumTwo += objectTwo[key][i];
    }
  }

  value = sumOne + sumTwo;
  return value;
  
}

console.log(`exampleFive: ${exampleFive(basicData, two)}`)