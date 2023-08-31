function my_sum(n) {
    return n <= 1
           ? 1*2
           : (n+1)*n + my_sum(n-1);
           
}

// my_sum(4);

// 3*4 + 2*3 + 1*2 = 12 + 6 + 2 = 20
// Recursive process due to deferred operations
// Memory and space Theta(n)

function sum(term, a, next, b) {
    return a > b
            ? 0
            : term(a) + sum(term, next(a), next, b);
}

function my_sum2(n) {
    return sum(x=>x*(x+1), 1, x=>x+1, n);
}
// T1 : X => X*(X+1)
// T2 : 1
// T3 : X => X+1
// T4 : N
// my_sum2(4);

function sum_iter(term, a, next, b, result) {
    return a > b
           ? result
           : sum_iter(term, next(a), next, b, result + term(a));
}


// sum_iter(x=>x, 1, x=>x+1, 6, 0);
// 1 + 2 + 3 + 4 + 5 + 6

sum_iter(x=>x*(x+1), 1, x=>x+1, 4, 0);

/*
a. x and h
b. 
c. 4 + g(3), g(4) = 2*4 = 8, 4+8, 12
d. g(y=>y+2, 5), return 7
*/


