var Cars = ["Sedan", "Etios", "SUV"];
//Cars[0] = "Compass"; //Change the first element
console.log(Cars);
console.log(Cars[1]);
const person = {firstName:"Nagappan", lastName:"Kumaresan", age:36};
console.log(person);
console.log(person.firstName);
console.log(Cars.length);
console.log(Cars[0]);
console.log(Cars[Cars.length - 1]);
function CarDet()
{
    let CarLen = Cars.length;
    for(let i = 0; i < CarLen; i++)
    {
        console.log(Cars[i]);      
    }
}
console.log(CarDet());

console.log(Cars.forEach(myFunction));

function myFunction(value)
{
    console.log(value);// array looping with function
}