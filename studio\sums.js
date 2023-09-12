function every_second(xs) {
    function helper(xs, count) {
        return count >= length(xs) 
            ? null
            : pair(list_ref(xs, count), helper(xs, count+2));
    }
    return helper(xs, 1);
}

// every_second(list(1,2,3,4,5,6));

function sums(xs) {
    const odd_rank = every_second(xs);
    
    function sum_list(xs, n, l) {
        return n === l
            ? 0
            : head(xs) + sum_list(tail(xs), n+1, l);
    }
    
    const total_sum = sum_list(xs, 0, length(xs));
    const odd_sum = sum_list(odd_rank, 0, length(odd_rank));
    const even_sum = total_sum - odd_sum;
    return list(odd_sum, even_sum);
}

sums(list(1,2,3,4,5));