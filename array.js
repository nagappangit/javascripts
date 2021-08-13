var Cars = ["Sedan", "Etios", "SUV"];
//Cars[0] = "Compass"; //Change the first element
console.log(Cars);
console.log(Cars[1]);
const person = {firstName:"Nagappan", lastName:"Kumaresan", age:36};
console.log(person);
console.log(person.firstName);
console.log(Cars.length);
console.log(Cars[0]); //accessing first array element
console.log(Cars[Cars.length - 1]); //aaccessing last array element
//Looping Array Elements
function CarDet(){
    let CarLen = Cars.length;
    for(let i = 0; i < CarLen; i++)
    {
        console.log(Cars[i]);      
    }
}
console.log(CarDet());
function myFunction(value){
    console.log(value);// array looping with function
}
console.log(Cars.forEach(myFunction)); // looping array element using forEach mathod
//Adding Array Elements
Cars.push("SUV Innova");
console.log(Cars);
//using the length property
Cars[Cars.length] = "SUV Crysta";
console.log(Cars);
//Associative Arrays
const People = [];
People[0] = "India";
People[1] = "Population";
People[2] = 1234567;
console.log(People.length);
console.log(People[1]);
console.log(typeof People);
console.log(typeof Cars);
//Avoid new Array()
const Marks = new Array(50, 100, 10, 15, 45, 100);
console.log(Marks);
const MarksNew = [90, 100, 90, 95, 95, 100]; // This way is better for the above new Array
console.log(MarksNew);
//Converting Arrays to Strings
console.log(Marks.toString());
console.log(MarksNew.toString());
console.log(Marks.join(" | "));
//Array Popping and Pushing
var Cars = ["Sedan", "Etios", "SUV"];
console.log(Cars.pop());//it returns the last element ( like last in first out)
console.log(Cars.pop(1));//it returns the specified elements
console.log(Cars.push("Innova"));// it push the value to last elemnt after
console.log(Cars.toString());
console.log(Cars.push("Crysta"));
console.log(Cars.toString());
//Shifting Elements
console.log(Cars.shift());
console.log(Cars.unshift("Tempo"));
//Changing Elements
console.log(Cars[0] = "Magna");
console.log(Cars.toString());
//Deleting Elements
delete Cars[0];// Use pop and shift insted of this delete
console.log(Cars.toString());
//Splicing an Array
Cars.splice(2,0,"Mahindra","KIA");
console.log(Cars.toString());
Cars.splice(0,1,"Etios");
console.log(Cars.toString());
//Sorting an Array
let cricket = ["India", "Australia","South Africa", "Sri Lanka","Pakistan","Bangladesh","England","West Indis","Zimbabway"];
console.log(cricket.sort().toString());
//Reversing an Array
console.log(cricket.reverse().toString()); // initialy sort the array is important then revesrse is working fine
//Numeric Sort
const Players = [11,3,5,2,1,6,8,9,7,10,12,4];
console.log(Players.sort(function(a,b){
    return a - b
}).toString());
//sort an array descending
console.log(Players.sort(function(a,b){
    return b - a
}).toString());
//Sorting an Array in Random Order
console.log(Players.sort(function(a, b){
    return 0.5 - Math.random()
}).toString());
//The Fisher Yates Method
function Myplayers(){
    for(let i = Players.length -1; i > 0; i--){
        let j = Math.floor(Math.random() * i)
        let k = Players[i]
        Players[i] = Players[j]
        Players[j] = k
    }
    console.log(Players.toString());
}
console.log(Myplayers());