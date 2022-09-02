var operador=0;
var num_1=0;
var bloqueio=false;
var result=0;
var bloqueio2=0;
var limite=0;
var limiteP=0;
var sound=false;
var mais_menos=0;
var tempo=1;
var bloqueio3=0;


function som(){
    if(sound==false){
        let som="Som:On"
        document.getElementById("som").innerHTML =som;
        sound=true;
    }else{
        let som="Som:Off"
        document.getElementById("som").innerHTML =som;
        sound=false;
    }
}
function limpar(){

    let limpar="0";
    document.getElementById("display").innerHTML =limpar;
    operador=0;
    num_1=0;
    bloqueio=false;
    result=0;
    bloqueio2=0;
    limite=0;
    limiteP=0;
    mais_menos=0;
    bloqueio3=0;
    if(sound==1){
        let music = new Audio('files/click.mp3')
        music.play();}

    
}

function MN(){
    if(limite<17){
        if(sound){
        let music = new Audio('files/click.mp3')
        music.play();}
        if(bloqueio2==1){
            if(mais_menos==0){
                let x=document.getElementById("display").innerHTML;
                document.getElementById("display").innerHTML = -x;
                ++mais_menos;
                ++limite;}
                else{
                    let x=document.getElementById("display").innerHTML;
                    document.getElementById("display").innerHTML = -x;
                    --mais_menos;
                --limite;}
            }}
}
 

function um(){
    if(limite<15){
        if (bloqueio==false){
            let num="";
            document.getElementById("display").innerHTML = num;}
        let num=document.getElementById("display").innerHTML;
        let btn_valor=document.getElementById("um").value;
        document.getElementById("display").innerHTML = num+btn_valor;
        bloqueio=true;
        bloqueio2=1;
        ++limite;
        bloqueio3=1;
        if(sound){
        let music = new Audio('files/click.mp3')
        music.play();}
        }
    
}


function dois(){
    if(limite<15){
        if (bloqueio==false){
            let num="";
            document.getElementById("display").innerHTML = num;}
        let num=document.getElementById("display").innerHTML;
        let btn_valor=document.getElementById("dois").value;
        document.getElementById("display").innerHTML = num+btn_valor;
        bloqueio=true;
        bloqueio2=1;
        ++limite;
        bloqueio3=1;
        if(sound){
            let music = new Audio('files/click.mp3')
            music.play();}}

    
}

function tres(){
    if(limite<15){
        if (bloqueio==false){
            let num="";
            document.getElementById("display").innerHTML = num;}
        let num=document.getElementById("display").innerHTML;
        let btn_valor=document.getElementById("tres").value;
        document.getElementById("display").innerHTML = num+btn_valor;
        bloqueio=true;
        bloqueio2=1;
        ++limite;
        bloqueio3=1;
        if(sound){
            let music = new Audio('files/click.mp3')
            music.play();}}

    
}

function quatro(){
    if(limite<15){
        if (bloqueio==false){
            let num="";
            document.getElementById("display").innerHTML = num;}
        let num=document.getElementById("display").innerHTML;
        let btn_valor=document.getElementById("quatro").value;
        document.getElementById("display").innerHTML = num+btn_valor;
        bloqueio=true;
        bloqueio2=1;
        ++limite;
        bloqueio3=1;
        if(sound){
            let music = new Audio('files/click.mp3')
            music.play();}}

    
}

function cinco(){
    if(limite<15){
        if (bloqueio==false){
            let num="";
            document.getElementById("display").innerHTML = num;}
        let num=document.getElementById("display").innerHTML;
        let btn_valor=document.getElementById("cinco").value;
        document.getElementById("display").innerHTML = num+btn_valor;
        bloqueio=true;
        bloqueio2=1;
        ++limite;
        bloqueio3=1;
        if(sound){
            let music = new Audio('files/click.mp3')
            music.play();}}

    
}

function seis(){
    if(limite<15){
        if (bloqueio==false){
            let num="";
            document.getElementById("display").innerHTML = num;}
        let num=document.getElementById("display").innerHTML;
        let btn_valor=document.getElementById("seis").value;
        document.getElementById("display").innerHTML = num+btn_valor;
        bloqueio=true;
        bloqueio2=1;
        ++limite;
        bloqueio3=1;
        if(sound){
            let music = new Audio('files/click.mp3')
            music.play();}}

    
}

function sete(){
    if(limite<15){
        if (bloqueio==false){
            let num="";
            document.getElementById("display").innerHTML = num;}
        let num=document.getElementById("display").innerHTML;
        let btn_valor=document.getElementById("sete").value;
        document.getElementById("display").innerHTML = num+btn_valor;
        bloqueio=true;
        bloqueio2=1;
        ++limite;
        bloqueio3=1;
        if(sound){
            let music = new Audio('files/click.mp3')
            music.play();}}

    
}

function oito(){
    if(limite<15){
        if (bloqueio==false){
            let num="";
            document.getElementById("display").innerHTML = num;}
        let num=document.getElementById("display").innerHTML;
        let btn_valor=document.getElementById("oito").value;
        document.getElementById("display").innerHTML = num+btn_valor;
        bloqueio=true;
        bloqueio2=1;
        ++limite;
        bloqueio3=1;
        if(sound){
            let music = new Audio('files/click.mp3')
            music.play();}}

    
}

function nove(){
    if(limite<15){
        if (bloqueio==false){
            let num="";
            document.getElementById("display").innerHTML = num;}
        let num=document.getElementById("display").innerHTML;
        let btn_valor=document.getElementById("nove").value;
        document.getElementById("display").innerHTML = num+btn_valor;
        bloqueio=true;
        bloqueio2=1;
        ++limite;
        bloqueio3=1;
        if(sound){
            let music = new Audio('files/click.mp3')
            music.play();}}

    
}

function zero(){
    if(limite<15){
        if (bloqueio==false){
            let num="";
            document.getElementById("display").innerHTML = num;}
        let num=document.getElementById("display").innerHTML;
        let btn_valor=document.getElementById("zero").value;
        document.getElementById("display").innerHTML = num+btn_valor;
        bloqueio=true;
        bloqueio2=1;
        ++limite;
        bloqueio3=1;
        if(sound){
            let music = new Audio('files/click.mp3')
            music.play();}}

    
}
function ponto(){
    if(limite<15){
        if(bloqueio3==1){
            if(limiteP<1){
                    let num=document.getElementById("display").innerHTML;
                    let btn_valor=document.getElementById("ponto").value;
                    document.getElementById("display").innerHTML = num+btn_valor;
                    bloqueio=true;
                    bloqueio2=1;
                    ++limiteP; 
                    ++limite;
                    if(sound){
                        let music = new Audio('files/click.mp3')
                        music.play();}}}}

    
}



function mais(){
    if(sound){
        let music = new Audio('files/click.mp3')
        music.play();}
    if (bloqueio2==1){
        num_1=parseFloat(document.getElementById("display").innerHTML);
        operador=1;
        bloqueio=false;
        limite=0;
        limiteP=0;
        bloqueio2=0;
        bloqueio3=0;
      
    }
        
        

    
 


    
}
function menos(){
    if(sound){
        let music = new Audio('files/click.mp3')
        music.play();}
    if (bloqueio2==1){
        num_1=parseFloat(document.getElementById("display").innerHTML);
        operador=2;
        bloqueio=false;
        limite=0;
        limiteP=0;
        bloqueio2=0;
        bloqueio3=0;
      
    }

    
}

function mult(){
    if(sound){
        let music = new Audio('files/click.mp3')
        music.play();}
    if (bloqueio2==1){
        num_1=parseFloat(document.getElementById("display").innerHTML);
        operador=3;
        bloqueio=false;
        limite=0;
        limiteP=0;
        bloqueio2=0;
        bloqueio3=0;}
    
 
       
    
}
function dividir(){
    if(sound){
        let music = new Audio('files/click.mp3')
        music.play();}
    if(bloqueio2==1){
        num_1=parseFloat(document.getElementById("display").innerHTML);
        operador=4;
        bloqueio=false;
        limite=0;
        limiteP=0;
        bloqueio2=0;
        bloqueio3=0;}
   
    
}



function igual(){
    if(sound){
        let music = new Audio('files/click.mp3')
        music.play();}
    if (bloqueio==1){
        let num_2=parseFloat(document.getElementById("display").innerHTML);
        switch (operador){
            case 1:
                result=num_1+num_2;
                let res=String(result);
                document.getElementById("display").innerHTML = res.substr(0,15);
                operador=0;
                bloqueio=false;
                limite=0;
                limiteP=0;
                bloqueio3=0;
              
                break;
            case 2:
                result=num_1-num_2;
                let res1=String(result);
                document.getElementById("display").innerHTML = res1.substr(0,15);
                operador=0;
                bloqueio=false;
                limite=0;
                limiteP=0;
                bloqueio3=0;
                break;
            case 3:
                result=num_1*num_2;
                let res2=String(result);
                document.getElementById("display").innerHTML = res2.substr(0,15);
                operador=0;
                bloqueio=false;
                limite=0;
                limiteP=0;
                bloqueio3=0;
               
                break;
            case 4:
                result=num_1/num_2;
                let res3=String(result);
                document.getElementById("display").innerHTML = res3.substr(0,15);
                operador=0;
                bloqueio=false;
                limite=0;
                limiteP=0;
                bloqueio3=0;
                
                break;
            }}
   
   




    
}
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


