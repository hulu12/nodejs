var sort=require('./sort.js');
var testArray=[12,8,9,23,1,4434,112,3434,222,333];
var testArrayObj=[ { name: 'c', id: 21 },{ name: 'b', id: 12 },{ name: 'a', id: 2 } ];

console.log(sort.quicksort(testArray,process.argv[2]));

console.log(sort.quicksortObj(testArrayObj,'id',process.argv[2]));

console.log(sort.bucketsort(testArray));

console.log(sort.bucketsort(testArray));
