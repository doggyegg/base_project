class ArrayUtils {
  
  constructor() {
    
  }

  static fakeValue =  ['','null','undefined' ,'NaN','false','0'];



  static chunk(arr, size) {
    if (arr.length < size) {
      return arr;
    }
    const firstArr = [];
    for (let i = 0; i < size; i++) {
      firstArr.push(arr.shift());
    }
    return [firstArr, arr];
  }

  static compact(arr){
     return arr.filter(item=>{
       return  !(this.fakeValue.includes(item+''));
     })
  }
}


console.log(ArrayUtils.compact(['',2,3,null,undefined,NaN,false,0]));