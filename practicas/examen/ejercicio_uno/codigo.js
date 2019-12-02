let vector =[];
let tiempo;


function array(vector){

    for(i=0;i<vector.length;i++){
        vector.push(Math.random);
    }

    for(i=0;i<vector.length;i++){
        vector.splice(vector.length,1);

    }
    
    return console.log(vector);    

}


window.onload = function() {
    setInterval(array, 2000000);
  }