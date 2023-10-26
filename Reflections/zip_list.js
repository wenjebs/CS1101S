// function zip_list_of_streams(xs) {
//     // make an stream of ordered pairs, head of the pair is element, tail is the index of the stream
//     function ordered_pair(k) {
//         function ordered_pair_stream(x, y) {
//             return pair(pair(x, y), () => (y+1) < k ? ordered_pair_stream(x, y+1) : ordered_pair_stream(x+1, 0));
//         }
//         return ordered_pair_stream(0, 0);
//     }
//     const len = length(xs);
//     const ordered_pair_stream = ordered_pair(len);
//     // return ordered_pair_stream;
//     function mapper(ordered_pair) {
//         const element_index = head(ordered_pair);
//         const stream_index = tail(ordered_pair);
//         const stream = list_ref(xs, stream_index);
//         const element = stream_ref(stream, element_index);
//         return element;
//     }
//     return stream_map(mapper, ordered_pair_stream);
// }
function zip_list_of_streams(ss) {
    return pair(head(head(ss)), () => zip_list_of_streams(append(tail(ss), list(stream_tail(head(ss))))));
}
function integers_from(n) {
return pair(n, () => integers_from(n + 1));
}
const s1 = integers_from(1);
const s2 = integers_from(1);
const s3 = integers_from(1);
const zipped = zip_list_of_streams(list(s1,s2,s3));
eval_stream(zipped, 20);
function add_streams(s1, s2) {
return is_null(s1)
? s2
: is_null(s2)
? s1
: pair(head(s1) + head(s2),
() => add_streams(stream_tail(s1),
stream_tail(s2)));
}

function partial_sums(s) {
    return is_null(s)
        ? s
        : add_streams(stream_tail(s), partial_sums(s));
}

partial_sums(s1);
