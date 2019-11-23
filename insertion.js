var A = [];

function sort(A) {
    if(typeof(A) == 'undefined' || A.length <= 1)
        return A;

    var tmp;
    for(var j = 2; j < A.length; j++) {
        tmp = A[j];
        var i = j - 1;
        while(i > 0 && tmp < A[i]) {
            A[i+1] = A[i];
            i--;
        }
        
        A[i+1] = tmp;
    }
    
    return A;

} 