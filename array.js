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
