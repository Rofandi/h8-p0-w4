function cariModus(arr) {
    var duplicate =[];
    arr.sort(function(a,b){return a-b});
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]===arr[i+1])
        {
            duplicate.push(arr[i]);
        }
    }

    if(duplicate[0]===undefined || arr[0]===arr[arr.length-1])
    {
        return -1;
    }
    return duplicate[0];
}

  // TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1