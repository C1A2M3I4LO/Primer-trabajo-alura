
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;
// let palabraVeces ="vez";
let maximosIntentos =6;
 

while (numeroUsuario != numeroSecreto) { 
     numeroUsuario =  parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximoPosible} por favor:`));

     console.log(numeroUsuario);
     if (numeroUsuario == numeroSecreto) {
         alert(`Acertaste, el numero es: ${numeroUsuario} lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
      } else {  
         if (numeroUsuario > numeroSecreto)  {
             alert("El numero secreto es menor");
          } else {
             alert("El numero es mayor");
        }   
        //incrementa elcontador cuando no hacierta;  
        //intentos = intentos + 1;
        //intentos + = 1;
        intentos++;
        // palabraVEces  = "veces";
        if (intentos > maximosIntentos) {
            alert(`llegaste al numero maximode de ${maximosIntentos} intentos`);
            break ;
        }
           
    
        // alert ("Lo Siento, no acertaste el numero ")                                                     
    }
}




