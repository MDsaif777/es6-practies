function add(num1, num2  = 5){
    // if(num2 == undefined){
    //     num2 = 1
    // }
    // num2 = num2 || 2;
    return num1+num2;
};

const total =add(15,10);
console.log(total)