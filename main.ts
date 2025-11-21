/**
 * @author Nicholas Sun
 * @version 1.0.0
 * @date 2025-11-21
 * @fileoverview This program converts a cents amount into dollars and cents.
 */

// Declaring variables
let centsAsString: string = prompt("Enter a number of cents:") || "0";
let cents: number = parseInt(centsAsString);

// Calculation
let remainder : number = cents % 100;
let dollars : number = (cents - remainder) / 100;

// Printing
console.log(`That is ${dollars} dollars and ${remainder} cents.`);
