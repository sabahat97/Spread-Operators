//spread operators 
//like spread out ingrediants on the table.
function burger(zinger : number = 1, ...ingrediants: number []){
    console.log (zinger);
    console.log (...ingrediants)
} 
burger(1 + 2 + 4 - 5 + 10 + 11); //spread out , you can do + and -