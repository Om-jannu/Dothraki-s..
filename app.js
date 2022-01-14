var inputTxt = document.querySelector("#txt-input");
var submitBtn = document.querySelector("#btn-submit");
var outputTxt = document.querySelector("#txt-output");
var menu = document.querySelector("#menu");
var connect = document.querySelector("#connect");
var menuicon = document.querySelector("#menuicon");
var voice = document.querySelector("#voice");
var count=0;

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
            console.log("submit btn was clicked");
        })
    .catch(errorhandler)
    inputTxt.value = "";
};
function menuactionhandler(){
    connect.classList.toggle("activeconnect");
    menu.classList.toggle("activemenu");
    menuicon.classList.toggle("activemenuicon");
}
function voicehandler(){
    let utter = new SpeechSynthesisUtterance(outputTxt.innerText);
    speechSynthesis.speak(utter);
}
submitBtn.addEventListener("click",submitactionhandler);
menu.addEventListener("click",menuactionhandler);
voice.addEventListener("click",voicehandler);
