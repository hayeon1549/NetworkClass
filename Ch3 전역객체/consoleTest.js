function print(name, obj){
    console.log('Hello %s %d', name, 777);
    console.log('JSON %j', obj);
}

var st = setTimeout(print, 2000, 'hayeon', {});
var si = setInterval(() => {
    console.log('setInterval');
},1500);

console.time('start');
for(var i=0; i<1000000000; i++){
    continue;
}
console.timeEnd("start");

// clearTiomeout(st);
// clearInterval(si);

console.log(__dirname);
console.log(__filename);