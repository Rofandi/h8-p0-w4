function graduates (students) {
    var classList = getClassList(students);
    var graduatedName = getGraduatedName(students);
    var result = {};
    for(let i=0; i<classList.length; i++)
    {
        result[classList[i]] =
        for(let j=0; j<graduatedName.length; j++)
        { 
            if(classList[i].name===graduatedName[i])
            {
                name: classList[i].name,
                score: classList[i].score
            }
        }
    }
    console.log(result);
}

function getGraduatedName(students){
    var graduatedName = [];
    for(let i=0; i<students.length; i++)
    {
        if(students[i].score > 75)
        {
            graduatedName.push(students[i].name);
        }
    }
    return graduatedName;
}

function getClassList(students){
    var classList = [];
    var unique = 0;
    for(let i=0; i<students.length; i++)
    {
        if(classList.length===0)
        {
            classList.push(students[i].class);
        }
        for(let j=0; j<classList.length; j++)
        {
            if(classList[j]!==students[i].class)
            {
                unique=1;
            }
            else 
            {
                unique=0;
                break;
            }
        }
        if(unique===1)
        {
            classList.push(students[i].class);
        }
    }
    return classList;
}
  
console.log(graduates([
{
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
},
{
    name: 'Alexei',
    score: 85,
    class: 'wolves'
},
{
    name: 'Sergei',
    score: 74,
    class: 'foxes'
},
{
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
}
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
{
    name: 'Alexander',
    score: 100,
    class: 'foxes'
},
{
    name: 'Alisa',
    score: 76,
    class: 'wolves'
},
{
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
},
{
    name: 'Albert',
    score: 71,
    class: 'wolves'
},
{
    name: 'Viktor',
    score: 80,
    class: 'tigers'
}
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}