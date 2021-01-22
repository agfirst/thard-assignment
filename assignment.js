// First Number Problem Solve

function kilometerToMeter(n){

    var meter = n * 1000;

    return meter;
}
var avarege = kilometerToMeter(5);
console.log(avarege);




// Second Number Problem Solve

function budgetCalculator( watch, mobile, laptop){

    var budget = watch * 50;

    var second  = mobile * 100;

    var price = budget + second;

    var third = laptop * 500;

    var price = budget + second + third;

    return price;
}
var result = budgetCalculator(1, 5, 10);
console.log(result);


// Thard Number Problem Solve


function hotelCost(stay){
    var price = 0;
    if (stay <= 10){
        price = stay * 100;
    }
    else if (stay <= 20){
        var dayOfFirst1_10 = 10 * 100;
        var dayOfFirst11_20 = stay - 10;
        var dayOfFirst21_n = remaining * 80;
        price = dayOfFirst1_10 + dayOfFirst11_20;
    }
    else if(stay <= 100){
        var dayOfFirst1_10 = 10 * 100;
        var dayOfFirst11_20 = 10 * 80;
        var remaining = stay - 20;
        var dayOfFirst21_n = remaining * 50;
        price = dayOfFirst1_10 + dayOfFirst11_20 + dayOfFirst21_n;
    }
    return price;
}

var result = hotelCost (40);
console.log(result);


// Fourth Number poblem solve

function megaFriend(str){
    
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(megaFriend('JavaScript Problem Solve'));