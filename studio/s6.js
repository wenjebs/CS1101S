// function my_map(f, xs) {
//     return accumulate((x,y) => append(list(f(x)), y), null, xs);
// }

// my_map(x=>x+1, list(1,2,3,4));

// function remove_duplicates(xs) {
//     return is_null(xs)
//         ? null
//         : pair(head(xs), 
//         remove_duplicates(filter(x => !equal(x, head(xs)), tail(xs))));
// }

// remove_duplicates(list(1,2,3,4,1,2,3,4));

// function remove_duplicates_accum(xs) {
//     return accumulate(
//         (x,ys) => append(list(x), filter(y=>!equal(y, x), ys)),
//         null,
//         xs
//         );
// }

// remove_duplicates_accum(list(1,2,3,4,1,2,3,4));

// function remove_duplicates_accum_nof(xs) {
//     return accumulate(
//         (x,y) => (is_null(member(x, y)) ? pair(x, y) : y),
//         null,
//         xs
//         );
// }
// pair(1, pair(2, pair(2, null))), check if 2(x) is a member of pair(2, null)(y)
// remove_duplicates_accum_nof(list(1,2,3,4,1,2,3,4));

function subsets(xs) {
    if (is_null(xs)) {
        return list(null);
    } else {
        // dont include the first element
        const without_first = subsets(tail(xs)); // this shd be a list of subsets (2,3) (2) (3)
        // include the first element
        const with_first = map(subset=>pair(head(xs), subset), without_first); // this will then be (1,2,3) (1,2) (1,3)
        return append(with_first, without_first); 
    }

}

function subsets2(xs) {
    return accumulate((x,ss)=>append(ss, map(s => pair(x, s), ss)), list(null), xs);
}
display_list(subsets2(list(1,2,3)));

function permutation(xs) {
    if (is_null(xs)) {
        return list(null);
    } else {
        return accumulate(append, null, 
        map(x => map(p => pair(x, p), permutation(remove(x, xs))), xs));
    }
}

// display_list(permutation(list(1,2,3)));

// display_list(accumulate(append, null,
//     list(list(list(1, list(2, list(3))), list(1, list(3, list(2)))),
//      list(list(2, list(1, list(3))), list(2, list(3, list(1)))),
//      list(list(3, list(1, list(2))), list(3, list(2, list(1)))))));




