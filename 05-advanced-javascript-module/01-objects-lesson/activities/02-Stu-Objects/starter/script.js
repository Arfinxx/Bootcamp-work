//WRITE YOUR CODE BELOW

var customerOrder = {

    name: "Yeomyung",
    sugars: 5,
    ready: true
};

console.log(customerOrder.name + " has ordered a drink with " + customerOrder["sugars"] + " sugars.");

if(customerOrder.ready){

    console.log("Ready for pick-up.");
}  else{
    console.log("Still in order queue.");
};