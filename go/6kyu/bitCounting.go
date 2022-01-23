package main

import "fmt"

func main() {
	fmt.Println(CountBits(1234))
}

func CountBits(n uint) int {
	var i int = 0
	for n > 0 {
		i = i + int(n)%2
		n = n / 2
	}
	return i
}
