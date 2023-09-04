// Studio 4

function pascal(row, column) {
    if (column > row  || column < 0) {
        return 0;
    } else if (row === 0 || column === 0 || row === column) {
        return 1;
    } else {
        return pascal(row-1, column-1) + pascal(row-1, column);
    }
}


pascal(4,3);


