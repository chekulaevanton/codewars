function zero(res) {return calculate(res, 0)}
function one(res) {return calculate(res, 1)}
function two(res) {return calculate(res, 2)}
function three(res) {return calculate(res, 3)}
function four(res) {return calculate(res, 4)}
function five(res) {return calculate(res, 5)}
function six(res) {return calculate(res, 6)}
function seven(res) {return calculate(res, 7)}
function eight(res) {return calculate(res, 8)}
function nine(res) {return calculate(res, 9)}

function plus(num) {return '+' + num}
function minus(num) {return '-' + num}
function times(num) {return '*' + num}
function dividedBy(num) {return '/' + num}

function calculate(res, num) {return !res ? num : Math.floor(eval(num + res))}
