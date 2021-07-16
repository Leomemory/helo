//多维数组扁平化
function hasChildArray(arr){
    return arr.some(element=>{
        if (Array.isArray(element)) {
            return true;
        }
    })
}
let sourceArr = [[0], [2, 3, 4], 1, [1, [2, 3]]];
// let sourceArr = [0, 2, 3, 4, 1];
let result = [];
console.log(hasChildArray(sourceArr));
(function doFunc(arr){
    if(hasChildArray(arr)){
        for (let i = 0, l = arr.length; i < l; i++) {
            if (typeof arr[i] == "number") {
                result.push(arr[i]);
            } else if (Array.isArray(arr[i])) {
                doFunc(arr[i]);
            }
        }
    }else{
        result=result.concat(arr);
    }
})(sourceArr);
console.log(result)