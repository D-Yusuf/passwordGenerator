let generate_btn = document.querySelector("#generate-btn");
let result_1 = document.querySelector("#result-1");
let result_2 = document.querySelector("#result-2");
let copy_1 = document.querySelector("#copy-1");
let copy_2 = document.querySelector("#copy-2");

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

generate_btn.addEventListener("click", ()=>{
    let generatedCharacters = document.querySelector("#input").value
    generatePassword(generatedCharacters)
})

function generatePassword(passwordlength){
    reset()
    for (i = 0; i < passwordlength; i++){
        let random_1 = Math.floor(Math.random() * characters.length)
        let random_2 = Math.floor(Math.random() * characters.length)

        result_1.value += characters[random_1]
        result_2.value += characters[random_2]
    }
}
function reset(){
    result_1.value = ""
    result_2.value = ""

}
// Copy
copy_1.addEventListener("focus", ()=>{
// Get the text field
  var copyText = document.getElementById("result-1");

  // Select the text field
  copyText.select();
  // For mobile devices
  copyText.setSelectionRange(0, 99999); 
  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  //Set tooltip to show "Copied"
  
  document.getElementById("tooltip-1").setAttribute("data-tip", "copied")
  navigator.vibrate(200)
})
copy_2.addEventListener("focus", ()=>{
    // Get the text field
      var copyText = document.getElementById("result-2");
    
      // Select the text field
      copyText.select();
      // For mobile devices
      copyText.setSelectionRange(0, 99999); 
      // Copy the text inside the text field
      navigator.clipboard.writeText(copyText.value);
      //Set tooltip to show "Copied"
      
      document.getElementById("tooltip-2").setAttribute("data-tip", "copied")
      navigator.vibrate(200)
    })
