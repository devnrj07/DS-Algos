package main

import (
	"fmt"
)

func main() {
	reverseInt(1023)
	reverseInt(2314)
	reverseInt(500)
	reverseInt(0)
	//reverseInt(3.45) // float case ?
	reverseInt(-5986) // how to handle -ve Int case. Done
}

func reverseInt(n int) {

	fmt.Println("Original : ", n)
	reversed := 0

	if n < 0 {
		n *= -1
		
	}

	for n > 0 {

		reversed = reversed*10 + n%10
		n = n / 10
	}
	
	if n < 0 {
	fmt.Println(" reversed : ", reversed * -1)
	}

	fmt.Println(" reversed : ", reversed)
}
