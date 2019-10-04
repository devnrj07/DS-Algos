//Anagrams using sort
package main

import (
	"fmt"

	"sort"
)

type ByRune []rune

func (r ByRune) Len() int           { return len(r) }
func (r ByRune) Swap(i, j int)      { r[i], r[j] = r[j], r[i] }
func (r ByRune) Less(i, j int) bool { return r[i] < r[j] }

func StringToRuneSlice(s string) []rune { // using a []rune to sort the given string
	var r []rune
	for _, runeValue := range s {
		r = append(r, runeValue)
	}
	return r
}

func AreAnagram(s1, s2 string) bool {
	var r1 ByRune = StringToRuneSlice(s1)
	var r2 ByRune = StringToRuneSlice(s2)

	sort.Sort(r1)
	sort.Sort(r2)

	return string(r1) == string(r2) // then comparing
}

func main() {

	fmt.Println(AreAnagram("Hello There!", "!hello there")) // add cleaning condition filter punctuation and lowercase them
	fmt.Println(AreAnagram("Hello There!", "!erehT olleH")) 
}
