// console.log(this);
//Logs window

// function helloThis() {
//   console.log('Inside this function, this is ' + this);
// }
// // Logs Object window
// helloThis();


// var child = {
//   age: 10,
//   ageTenYears: function () {
//     console.log(this.age + 10);
//   },
// };
// // Logs 20
// child.ageTenYears();

var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
    },
  },
};
// Logs 5750
investor.investment.investmentGrowth();
