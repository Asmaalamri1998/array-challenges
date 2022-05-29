function reverse(arr) {
    var newarr = [];
    for (var i = arr.length; i > 0; i--){
        newarr.push(arr.pop());
    }
    

   arr=newarr;
    
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
