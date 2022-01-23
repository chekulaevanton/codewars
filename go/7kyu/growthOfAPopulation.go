package main

import "fmt"

func main() {
	fmt.Println(NbYear(1000, 5, 100, 1500))
}

func NbYear(p0 int, percent float64, aug int, p int) int {
	y := 0
	for ; p0 < p; y++ {
		p0 = int(float64(p0)*(1.0+percent/100)) + aug
	}
	return y
}
