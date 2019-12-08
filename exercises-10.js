function changeMe(arr) {
    var fullInfo = [];
    var year = new Date().getFullYear();
    var ageError = 'Invalid Birth Year';
    for(let i=0; i<arr.length; i++)
    {
        fullInfo.push({
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: year-arr[i][3],
        })
        if(arr[i][3]===undefined || year-arr[i][3]>arr[i][3])
        {
            fullInfo[i].age = ageError;
        }
        console.log(`${i+1}. ${fullInfo[i].firstName} ${fullInfo[i].lastName}:`)
        console.log(fullInfo[i]);
    }
}
  
  // TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""