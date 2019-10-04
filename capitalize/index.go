package main

import (
	"fmt"
	s "strings"
)

func main() {

	fmt.Println("Print :", capitalize("a fox is clever"))
}

func capitalize(str string) string {
	bytes := []byte(str)

	words := s.ToUpper(string(bytes[0])) // certainly not the correct way to use ToUpper(string)

	for i := 1; i < len(str); i++ {

		if str[i-1] == ' ' {
			words += s.ToUpper(string(bytes[i]))
		} else {
			words += string(bytes[i])

		}
	}
	return words
}
