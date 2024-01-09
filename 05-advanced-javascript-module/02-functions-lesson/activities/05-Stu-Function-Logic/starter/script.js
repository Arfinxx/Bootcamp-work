// Write Your Code Below

function comp(x,y){

    if (x===y){
        console.log(x + " and " + y + " are equal in value and type.")
    } else if (x==y){

        console.log(x + " and " + y + " are equal in value only.");
    } else{
        console.log(x + " and " + y + " are not equal in any way.");
    }
};

comp(2, 2);

comp(2,"2");

comp(2, true);