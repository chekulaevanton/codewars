package main

import "fmt"

func main() {
	fmt.Println(Divisors(4)) // 4, 2, 1 (3)
}

func Divisors(n int) (d int) {
	for i := 1; i <= n; i++ {
		if n%i == 0 {
			d++
		}
	}
	return
}
