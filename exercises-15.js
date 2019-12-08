function highestScore (students) {
    var classList = getClassList(students);
    var topScore = getTopScore(students);
    var topScoreName = getTopScoreName(students);
    
    var result = {};
    for(let i=0; i<classList.length; i++)
    {
        let className = classList[i];
        result[className] = {
            name: topScoreName[i],
            score: topScore[i]
        }
    }
    console.log(result);
}

function getTopScoreName(students){
    var topScoreName = [];
    var classList = getClassList(students);
    var topScore = getTopScore(students);
    for(let i=0; i<students.length; i++)
    {
        for(let j=0; j<classList.length; j++)
        {
            if(students[i].score===topScore[j] && classList[j]===students[i].class)
            {
                topScoreName.push(students[i].name);
            }
        }
    }
    return topScoreName;
}

function getTopScore(students){
    var topScore = [];
    var classList = getClassList(students);
    for(let i=0; i<students.length; i++)
    {
        for(let j=0; j<classList.length; j++)
        {
            if(topScore[j]===undefined)
            {
                topScore[j]=0;
            }
            if(classList[j]===students[i].class && students[i].score > topScore[j])
            {
                topScore[j] = students[i].score;
            }
        }
    }
    return topScore;
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

// TEST CASE
console.log(highestScore([
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
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
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}