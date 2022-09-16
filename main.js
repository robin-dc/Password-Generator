const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const passOne = document.querySelector(".pass1")
const passTwo = document.querySelector(".pass2")

let passlength = 12

function generateEl(){
    let randomOne = Math.floor(Math.random()* characters.length)
    return characters[randomOne]
}

function generatePass(){
    let randomPass = ""
    for (let i = 0; i < passlength; i++){
        randomPass += generateEl()
    }
    return randomPass
}
function generate(){
    passOne.textContent = generatePass()
    passTwo.textContent = generatePass()
}