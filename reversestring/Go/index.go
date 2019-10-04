package main

import (
	"fmt"
)

func main() {
	reverseString("Google")
	reverseString("GoLang")

}

func reverseString(str string) {

	fmt.Println("Original String : ", str)
	runes := []rune(str)

	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {

		runes[i], runes[j] = runes[j], runes[i]
	}
	fmt.Println("Reversed String : ", string(runes))
}
