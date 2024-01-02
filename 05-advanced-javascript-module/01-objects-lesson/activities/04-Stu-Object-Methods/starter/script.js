//WRITE YOUR CODE BELOW

var menu = {

    Strawberry_Milkshake: 2,

    Mango_Milkshake: 2.50,

    Banana_Milkshake: 2,

    Water: 0.50
};

console.log(Object.keys(menu));

let arrMenu = Object.values(menu);
var totalCost = 0;

for(var i = 0; i < arrMenu.length; i++){

    totalCost += Object.values(menu)[i];
};

console.log("The total price of the menu is: £" + totalCost);