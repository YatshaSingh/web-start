var btntranslate=document.querySelector("#btn-translate");
var txtinput= document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverurl= "https://api.funtranslations.com/translate/minion.json"


function gettranslationURL(input)
{
     return serverurl+ "?"+ "text=" + input
}

function errorhandler(error){
    console.log("error occured",error);
    alert("something wrong with server! try after sometime")
}

function clickEventHandler()
{
var inputext = txtinput.value;
fetch(gettranslationURL(inputext))
    .then(response=>response.json())
    .then(json => {
        var translatetext =json.contents.translated;
        outputDiv.innerText =translatetext;
    })
   .catch(errorhandler)

}

btntranslate.addEventListener("click", clickEventHandler);
