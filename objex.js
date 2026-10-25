// let student={
//     id:1,
//     name:"Nisha",
//     std:2,
//     displaydetails : function(){
//     console.log(this.name+" "+this.id+" "+this.account)
// }
// };

// console.log(student.name)
// console.log(student["std"])
// student.age =10;
// student.account="PNB"
// console.log(student)
// student.displaydetails()

// const employees = [
//     { id: 1, name: "Amit", salary: 30000 },
//     { id: 2, name: "Neha", salary: 45000 },
//     { id: 3, name: "Ravi", salary: 35000 }
// ];

// // console.log(employees[0].name+" "+employees[1].salary); 

// const result = employees.filter(
//     employee => employee.salary > 35000
// );

// console.log(result);

const user = {
    name: "Pooja",
    city: "Jodhpur"
};

const { name, city } = user;

console.log(name);
console.log(city);