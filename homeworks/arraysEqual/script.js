function areArraysEqual(A, B) {
    for (var i = 0; i < A.length; ++i) {
       if (A[i] !== B[i] && A.length != B.length) return false;
    } 
    return true;
}
