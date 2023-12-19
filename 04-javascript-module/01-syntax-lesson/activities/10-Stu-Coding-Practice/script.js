var player1 = 20_000_000;
var player2 = 20_000_000;
var player3 = 10_000_000;

var totalSalary = player1 + player2 + player3;
var spendingLimit = 40_000_000;

var taxRate = 0.18;

if(totalSalary > spendingLimit){

    console.log((totalSalary - spendingLimit) * taxRate)

}