package main

import (
	"fmt"
)

func main() {
	max_chars("asvewreeee")
	max_chars("whaaaaaaaaaaat")
	max_chars("12465745")
}

func max_chars(str string) string {

	max := 0
	char_max := ""
	char_map := map[byte]int{}

	for i := 0; i < len(str); i++ {
		if _, k := char_map[str[i]]; k { // initialization as well as condition k
			char_map[str[i]]++
		} else {

			char_map[str[i]] = 1
		}

	}

	for k, v := range char_map {

		if v > max {
			max = v
			char_max = string(k)
		}
	}
	fmt.Println("max_char", char_max)
	return char_max
}
