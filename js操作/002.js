// js得出每个元素在数组中出现的次数
var data = ['b','a','c','a','b','b','b','c','c','a','c','a','a','a','s','s'];
//空对象
var map = {};
var i = 0, len = data .length;
for(;i<len;i++){
    var v = data [i];
    // console.log(v)
    var counts = map[v];
    // console.log(counts)
    if(counts){
        map[v] += 1;
    }else{
        map[v] = 1;
    }
}
console.log(map);