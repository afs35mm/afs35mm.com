
window.AFS = window.AFS || {};

(function(AFS, self, undefined){

// for( i = 1 ; i <= 100 ; i++ ){
//    console.log( ( i % 3 ==  0 ? 'Fizz' : '' ) + ( i % 5 == 0 ? 'Buzz' : '' ) || i  );
// }

function sum(){
    var total = 0;
    for( i = 0; i < arguments.length ; i ++){
        total += arguments[i];
    }
    return total;
    //console.log(arguments);
}


console.log(sum.apply(null, [1, 2, 4, 5]));

}(AFS, AFS.lazyload = AFS.lazyload || {} ));

