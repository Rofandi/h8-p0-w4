function checkAB(num) {
    for(let i=0; i<num.length; i++)
    {
        if(num[i]==='a')
        {
            for(let j=0; j<num.length; j++)
            {
                if(num[j]==='b')
                {
                    if(Math.abs(j-i)<3)
                    {
                        return false;
                    }
                    else return true;
                }
            }
            return false;
        }
    }
}
  
  // TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
// barbarian harusnya false karena bacon and meat false
console.log(checkAB('bacon and meat')); // false