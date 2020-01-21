
async function loadJson(url) {
    let resultado = await fetch(url); //Await bloquea la ejecucion hasta que termina de ejecutarse el fecth y cuando termina, sigue ejecutando lo demas
    response => {
        if (response.status == 200) {
             return response.json();
        } else {
             throw new Error(response.status);
        }
      }
  }

async function ejecuta(){
    try{
        let resultado = await loadJson('no-such-user.json');
    }
    catch(error){
       alert(error); 
    }
}