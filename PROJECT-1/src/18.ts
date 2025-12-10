var principal = 1000;
var rate = 2;
var time = 3;
var emi = principal * ((rate*((1+rate)*(1+rate)))/((1+rate)*(1+rate)-1));
console.log("The EMI is: ", emi);