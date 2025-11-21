/**
 * @author Nicholas Sun
 * @version 1.0.0
 * @date 2025-11-21
 * @fileoverview This program converts a cents amount into dollars and cents.
 */

package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main(){
	// Declaring variables
	var centsAsString string
	var cents int

	// Input
	reader := bufio.NewReader(os.Stdin)
	fmt.Print("Enter a number of cents: ")
	centsAsString, _ = reader.ReadString('\n')
	centsAsString = strings.TrimSpace(centsAsString)
	cents, _ = strconv.Atoi(centsAsString)

	// Calculation
	var remainder int = cents % 100;
	var dollars int = (cents - remainder) / 100;

	// Printing
	fmt.Printf("That is %d dollars and %d cents.\n", dollars, remainder);
}
