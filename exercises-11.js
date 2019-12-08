function shoppingTime(memberId, money) {
  var daftarSale = [
    'Sepatu Stacattu','Baju Zoro','Baju H&N','Sweater Unikloh','Casing Handphone'
  ];
  var harga = [
    1500000, 500000, 250000, 175000, 50000
  ];
  var sold = [];
  var result = [];
  if(memberId === '' || memberId == null)
  {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  }
  if(money < 50000)
  {
    return 'Mohon maaf, uang tidak cukup';
  }
  for(let i=0; i<harga.length; i++)
  {
    if(money>=harga[i])
    {
      sold.push(daftarSale[i]);
      money -= harga[i];
    }
  }
  result.push({
    memberId: memberId,
    listPurchased: sold,
    changeMoney: money
  })
  return result;
}
  
// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja