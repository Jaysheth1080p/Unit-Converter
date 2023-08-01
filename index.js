
function convert(){

    let unit = document.getElementById('myNumber').value
    
   let feet = unit * 3.281
   document.getElementById("feetEl").innerHTML =`${unit} Meters = ${feet.toFixed(2)} feet  ` 
   
   let liters = unit / 3.8
   document.getElementById("litersEl").innerHTML =`${unit} Liters = ${feet.toFixed(2)} Gallons `
   
   let kilograms = unit * 2.205
   document.getElementById("kiloEl").innerHTML = `${unit} Kilograms = ${feet.toFixed(2)} Pounds `
   }
   
   