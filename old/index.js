var iframe = document.getElementById("tela"); 



var URLs = [];
var urlAtual= "";
var urlAtualJson = {};


var intervalo = 10000;

var ciclo = "";

function troca_link(url){   
    iframe.src = url
    console.log("executou");
}


//////////////////
fetch(" https://sheetdb.io/api/v1/7kho44vtmakgm")
.then(response => response.json() )
.then(data =>{
    URLs = data
    urlAtualJson= URLs[1];
    urlAtual = urlAtualJson["url"];
    console.log(urlAtual);
    console.log(data)
})
.catch(err => console.log(err))

////////////


function trocarTela(){
    var tamanho = URLs.length
    var proxUrl = URLs.indexOf(urlAtualJson) +1;
    if(proxUrl > tamanho -1){ proxUrl=0;}
    //console.log(novaUrl);
    //console.log(tamanho);

    urlAtualJson =URLs[proxUrl];
    urlAtual = urlAtualJson["url"];
    troca_link(urlAtual);

    console.log("URL ATUAL: "+ urlAtual);
}


function init(){
    trocarTela();
    ciclo = setInterval(trocarTela,intervalo);
}

function stop(){
    clearInterval(ciclo);
}

function refresh(){}

function addLink(){
    //console.log('bot press');
    const inputUrl = document.querySelector("#botAdd");
    const valorUrl = inputUrl.value;
    //console.log(valorUrl);
    URLs.push(valorUrl);
    salvarDadosNoStorage();
}

function setTIme(){
    
    const inputtemp = document.querySelector("#botTemp");
    const valortemp = inputtemp.value;
    intervalo = valortemp * 1000;
    console.log(intervalo);
    
}

