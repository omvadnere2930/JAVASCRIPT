"use strict";
var principal = 1000;
var demicals = 2;
var rate = 0.05;
var time = 3;
var amount = principal * Math.pow((1 + rate), time);
var compoundInterest = amount - principal;
console.log("Compound Interest: ", compoundInterest.toFixed(demicals));
