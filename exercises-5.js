function ubahHuruf(kata) {
    var newKata ='';
    for(let i=0; i<kata.length; i++)
    {
        newKata += aToB(kata[i]);
    }
    return newKata;
}

function aToB(huruf)
{
    switch(huruf)
    {
        case 'a': return 'b';
        case 'b': return 'c';
        case 'c': return 'd';
        case 'd': return 'e';
        case 'e': return 'f';
        case 'f': return 'g';
        case 'g': return 'h';
        case 'h': return 'i';
        case 'i': return 'j';
        case 'j': return 'k';
        case 'k': return 'l';
        case 'l': return 'm';
        case 'm': return 'n';
        case 'n': return 'o';
        case 'o': return 'p';
        case 'p': return 'q';
        case 'q': return 'r';
        case 'r': return 's';
        case 's': return 't';
        case 't': return 'u';
        case 'u': return 'v';
        case 'v': return 'w';
        case 'w': return 'x';
        case 'x': return 'y';
        case 'y': return 'z';
        case 'z': return 'a';
    }
}
  
  // TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu