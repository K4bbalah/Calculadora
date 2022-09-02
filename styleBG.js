
var tempo=1;

setInterval(function(){
    switch (tempo){
        case 1:
            document.getElementById("estilo").style.backgroundImage= 'linear-gradient(#0101ff,#cbff7b )';
            ++tempo;
            break;
        case 2:document.getElementById("estilo").style.backgroundImage= 'linear-gradient(#0000a4,#adff2f)';
            ++tempo;
            break;
        case 3:document.getElementById("estilo").style.backgroundImage= 'linear-gradient(#000083,#92f200)';
            ++tempo;
            break;
        case 4:document.getElementById("estilo").style.backgroundImage= 'linear-gradient(#151515,#fd51d1)';
            ++tempo;
            break;
        case 5:document.getElementById("estilo").style.backgroundImage= 'linear-gradient(#111111,#fc0fc0)';
            ++tempo;
            break;
        case 6:document.getElementById("estilo").style.backgroundImage= 'linear-gradient(#000000,#d3039e)';
            ++tempo;
            break;
        case 7:document.getElementById("estilo").style.backgroundImage= 'linear-gradient(#b509ff,#87b6b8)';
            ++tempo;
            break;
        case 8:document.getElementById("estilo").style.backgroundImage= 'linear-gradient(#9400d3,#5f9ea0)';
            ++tempo;
            break;
        case 9:document.getElementById("estilo").style.backgroundImage= 'linear-gradient(#7600a9,#4c7e80)';
            tempo=1;
            break;
    }
},2000)

