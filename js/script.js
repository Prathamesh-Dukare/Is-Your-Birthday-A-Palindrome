// Globle Variables
const dateInput = document.querySelector("#date-input");
const checkBtn = document.querySelector("#check-btn");
const outputDiv = document.querySelector("#output-div");

// Helper Functions
function isPalindome(dateStr){
    let reverseDateStr = dateStr.split("").reverse().join("");
    return dateStr === reverseDateStr;
}
function getDateStr(date){
    let dateStr = date.split("-").reverse().join('');
    return dateStr
}

// Click Handler
checkBtn.addEventListener("click",function checkBtnHandler(){
    let dateStr =  getDateStr(dateInput.value)
    let result =  isPalindome(dateStr);
    if(result){
        outputDiv.innerText = "Wow, Your Birthday is Palindrome👏"
    }else{
        outputDiv.innerText = "Sorry, Your Birthday is Not a Palindrome😒"
    }
})
