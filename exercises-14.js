function naikAngkot(arrPenumpang) {
    var result = [];
    for(let i=0; i<arrPenumpang.length; i++)
    {
        let harga = hitungHarga(arrPenumpang[i][1], arrPenumpang[i][2]);
        result.push({
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: harga
        })
    }
    return result;
}
function hitungHarga(rute1, rute2)
{
    var location1 = 0;
    var location2 = 0;
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    for(let i=0; i<rute.length; i++)
    {
        if(rute[i]===rute1)
        {
            location1 = i;
        }
    }
    for(let i=0; i<rute.length; i++)
    {
        if(rute[i]===rute2)
        {
            location2 = i;
        }
    }
    return Math.abs(location2-location1)*2000;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]