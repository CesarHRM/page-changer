var iframe = document.getElementById("tela"); 
var URLs = ['https://app.powerbi.com/view?r=eyJrIjoiNDIyYWJjM2ItYTgwMi00NjQzLWEzYTItZWMwNzIzOTY2MDUxIiwidCI6IjA0ZWM2MTA5LTRjNzktNGM3My1hZTcxLWE0NzRjMDlhMWY1YSJ9',
                'https://app.powerbi.com/view?r=eyJrIjoiYjNlNzAzMGQtZGQ0Yi00ZTQyLTg1NmMtZTdiZmI3MTAzZTQzIiwidCI6IjUzMjFhYTk0LWFmODgtNDU3Zi1hNWRkLTBkNWNhM2ZjYzIzOSIsImMiOjEwfQ%3D%3D',
                    'https://app.powerbi.com/view?r=eyJrIjoiMWU1OTliMzAtMDQxZi00NmRlLWFjZDMtNDY4NTA2N2I0MjYxIiwidCI6IjU3NzI4ZTBjLTNjMjMtNDMwMC05ZGViLTk1NTc5ODFkMDc4MSJ9'];  //   JSON.parse(localStorage.getItem('links')) || 
var urlAtual= URLs[1];

var intervalo = 10000;

var ciclo = "";

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
    urlAtual=URLs[proxUrl];
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

