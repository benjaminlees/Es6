/*In the snippet of code below please replace all functions
 with arrows and then run the file using npm run babel-node */

var arr = [1,2,3];

function arrMap (arr) {
   return arr.map( function (num) {
      return num + 1;
   })
};

console.log(arrMap(arr));
