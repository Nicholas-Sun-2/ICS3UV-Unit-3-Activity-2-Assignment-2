/**
 * @author Nicholas Sun
 * @version 1.0.1
 * @date 2025-11-21
 * @fileoverview This program converts a cents amount into dollars and cents.
 */

// Declaring variables
const centsAsString : string = prompt("Enter a number of cents:") || "0";
const cents : number = parseInt(centsAsString);

// Calculation
const remainder : number = cents % 100;
const dollars : number = (cents - remainder) / 100;

// Printing
console.log(`That is ${dollars} dollars and ${remainder} cents.`);
