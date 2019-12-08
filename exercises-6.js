function digitPerkalianMinimum(angka) {
    var min=angka.toString().length+1;
    for(let i=1; i<angka; i++)
    {
        if(angka % i ===0)
        {
            if(min > (i.toString().length+(angka/i).toString().length))
            {
                min = i.toString().length+(angka/i).toString().length;
            }
        }
    }
    return min;
}
  
  // TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2