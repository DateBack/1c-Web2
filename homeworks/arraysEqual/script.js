function areArraysEqual(A, B) {
    for (var i = 0; i < A.length; ++i) {
       if (A[i] !== B[i]) return false;
    } 
    return true;
}
