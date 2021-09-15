var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innereHTML = "";
    recognition.start();

    recognition.onresult = function run (event){
        console.log(event);
        var Content=event.results[0][0].trsnscript;
        console.log(Content);
        document.getElementById("textbox").innerHTML = Content;
    }
}
