let Name="My Name is Nagappan"; //back-tics quotes
console.log(Name);
let LName = "Kumaresan";
let FullName = `${Name} ${LName}`; // string interpolation
console.log(FullName);
let price =10;
let Tax = 18;
let Total = `Total= ${(price * (1+Tax/100)).toFixed(2)}`;
console.log(Total);
