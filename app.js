var inputTxt = document.querySelector("#txt-input");
var submitBtn = document.querySelector("#btn-submit");
var outputTxt = document.querySelector("#txt-output");

var serverURL = "https://api.funtranslations.com/translate/dothraki.json";

function getfetchurl(input){
    return serverURL+"?text="+input;
}
function errorhandler(error){
    console.log("Error occured",error);
    alert("Your 3-Free trials are over");
}
function submitactionhandler(){
    var input = inputTxt.value;
    fetch(getfetchurl(input))
    .then(response => response.json())
    .then(
        json => {
            var output = json.contents.translated;
            outputTxt.innerText = output;
            console.log("submit button was clicked");
        })
    .catch(errorhandler)
    inputTxt.value = " ";
};
submitBtn.addEventListener("click",submitactionhandler);
