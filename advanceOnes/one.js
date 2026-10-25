//function defination
//function without parameters
function sayHello(){
    console.log("Hello!!!!")
}

sayHello()
//function with parameters

function sayHelloWithName(name){
    console.log("Hello "+name)
}

sayHelloWithName("Taksha")
sayHelloWithName("bhavna")
sayHelloWithName(1)
//return_type fun_name(input parameters)
//c,c++.Java

//function returning something
function addNum(a,b){
    return a+b
}

var res = addNum(3,4)
console.log(res)

function isAdult(age){
    if(age>=18){
        return "Adult now!!!";
    }else{
         return "not Adult now!!!";
    }
}

console.log(isAdult(19))