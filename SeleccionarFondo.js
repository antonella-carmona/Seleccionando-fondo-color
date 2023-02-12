const  input = document.querySelector("input")
//El evento keydown se produce cuando se presiona una tecla
// target es: Identifica el target (objetivo) actual del evento
input.addEventListener("keydown", function(event){
    if (input.value && event.code === "Enter") {
        document.body.style.backgroundColor = event.target.value
    }
    else if(event.code === "Backspace"){   //Backspace = retroceso
       document.body.style.backgroundColor = "white"
    }
})


//_______________________________________________________________________________________
// OTRA FORMA SE HACERLO.

// input.addEventListener("keydown", function(){
//     document.body.setAttribute("bgcolor", input.value)
// })
//________________________________________________________________________________________


