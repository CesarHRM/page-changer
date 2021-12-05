var iframe = document.getElementById("tela"); 

var URLs = [];
var urlAtual= URLs[1];

var intervalo = 10000;

var ciclo = "";


//////////////////
fetch(" https://sheetdb.io/api/v1/7kho44vtmakgm")
.then(response => response.json() )
.then(data =>{
    //console.log(URLs);
    URLs= data;
    //console.log(URLs);
})
.catch(err => console.log(err))

////////////

function troca_link(url){   
    iframe.src = url
    console.log("executou");
}





function trocarTela(){
    var proxUrl = URLs.indexOf(urlAtual) +1;
    var tamanho = URLs.length
    if(proxUrl > tamanho -1){ proxUrl=0;}
    //console.log(novaUrl);
    //console.log(tamanho);
    //console.log(urlAtual);
    urlAtual=URLs[proxUrl]["url"];
    troca_link(urlAtual);
}

function teste(){console.log('testwe');}

function iniciar(){
    ciclo = setInterval(trocarTela,intervalo);
}

function parar(){
    clearInterval(ciclo);
}

function addLink(){
    //console.log('bot press');
    const inputUrl = document.querySelector("#botAdd");
    const valorUrl = inputUrl.value;
    //console.log(valorUrl);
    URLs.push(valorUrl);
    salvarDadosNoStorage();
}

function setarTempo(){
    
    const inputtemp = document.querySelector("#botTemp");
    const valortemp = inputtemp.value;
    intervalo = valortemp * 1000;
    console.log(intervalo);
    
}

function salvarDadosNoStorage(){
    localStorage.setItem('links', JSON.stringify(URLs) );
}

