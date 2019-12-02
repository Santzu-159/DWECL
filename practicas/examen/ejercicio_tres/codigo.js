var start = Date.now();
 
// Lo que queremos medir

var i, output ="";
for(i=1; i<1e6; i++){
    output +=1;
}

var end = Date.now();
 
console.log(end - start);