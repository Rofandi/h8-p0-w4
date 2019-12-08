function urutkanAbjad(str) {
    var temp=[];
    var result='';
    for(let i=0; i<str.length; i++)
    {
        temp[i] = str[i];
    }
    temp.sort();
    for(let i=0; i<temp.length; i++)
    {
        result += temp[i];
    }
    return result;
}
  
  // TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'