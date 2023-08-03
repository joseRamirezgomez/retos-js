let menuvisible = false;
function mostrarmenu() {
    
    if (menuvisible){
        document.getElementById("nav").classlist= "";
        mostrarmenu = false;
    }else{
       document.getElementById("nav").classList = "responsive";
        mostrarmenu = true;
    }
} 

function seleccionar(){
    const opcion1 = document.createElement('h3');
    opcion1.innerText = 'haz seleccionado la opcion 1'
    document.body.append(opcion1);
    document.getElementById("nav").classlist= "";
        mostrarmenu = false;
}