var operador=0;
var num_1=0;
var bloqueio=0;
var result=0;
var bloqueio2=0;
var limite=0;
var limiteP=0;
var sound=0;
var mais_menos=0;


function som(){
    if(sound==0){
        let som="Som:On"
        document.getElementById("som").innerHTML =som;
        ++sound;
    }else{
        let som="Som:Off"
        document.getElementById("som").innerHTML =som;
        --sound;
    }
}
function limpar(){

    let limpar="0";
    document.getElementById("display").innerHTML =limpar;
    operador=0;
    num_1=0;
    bloqueio=0;
    result=0;
    bloqueio2=0;
    limite=0;
    limiteP=0;
    mais_menos=0;
    if(sound==1){
        let music = new Audio('files/click.mp3')
        music.play();}

    
}

function MN(){
    if(limite<17){
        if(sound==1){
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
    if(limite<17){
        if (bloqueio==0){
            let num="";
            document.getElementById("display").innerHTML = num;}
        let num=document.getElementById("display").innerHTML;
        let btn_valor=document.getElementById("um").value;
        document.getElementById("display").innerHTML = num+btn_valor;
        bloqueio=1;
        bloqueio2=1;
        ++limite;
        if(sound==1){
        let music = new Audio('files/click.mp3')
        music.play();}
        }
    
}


function dois(){
    if(limite<17){
        if (bloqueio==0){
            let num="";
            document.getElementById("display").innerHTML = num;}
        let num=document.getElementById("display").innerHTML;
        let btn_valor=document.getElementById("dois").value;
        document.getElementById("display").innerHTML = num+btn_valor;
        bloqueio=1;
        bloqueio2=1;
        ++limite;
        if(sound==1){
            let music = new Audio('files/click.mp3')
            music.play();}}

    
}

function tres(){
    if(limite<17){
        if (bloqueio==0){
            let num="";
            document.getElementById("display").innerHTML = num;}
        let num=document.getElementById("display").innerHTML;
        let btn_valor=document.getElementById("tres").value;
        document.getElementById("display").innerHTML = num+btn_valor;
        bloqueio=1;
        bloqueio2=1;
        ++limite; 
        if(sound==1){
            let music = new Audio('files/click.mp3')
            music.play();}}

    
}

function quatro(){
    if(limite<17){
        if (bloqueio==0){
            let num="";
            document.getElementById("display").innerHTML = num;}
        let num=document.getElementById("display").innerHTML;
        let btn_valor=document.getElementById("quatro").value;
        document.getElementById("display").innerHTML = num+btn_valor;
        bloqueio=1;
        bloqueio2=1;
        ++limite; 
        if(sound==1){
            let music = new Audio('files/click.mp3')
            music.play();}}

    
}

function cinco(){
    if(limite<17){
        if (bloqueio==0){
            let num="";
            document.getElementById("display").innerHTML = num;}
        let num=document.getElementById("display").innerHTML;
        let btn_valor=document.getElementById("cinco").value;
        document.getElementById("display").innerHTML = num+btn_valor;
        bloqueio=1;
        bloqueio2=1;
        ++limite; 
        if(sound==1){
            let music = new Audio('files/click.mp3')
            music.play();}}

    
}

function seis(){
    if(limite<17){
        if (bloqueio==0){
            let num="";
            document.getElementById("display").innerHTML = num;}
        let num=document.getElementById("display").innerHTML;
        let btn_valor=document.getElementById("seis").value;
        document.getElementById("display").innerHTML = num+btn_valor;
        bloqueio=1;
        bloqueio2=1;
        ++limite; 
        if(sound==1){
            let music = new Audio('files/click.mp3')
            music.play();}}

    
}

function sete(){
    if(limite<17){
        if (bloqueio==0){
            let num="";
            document.getElementById("display").innerHTML = num;}
        let num=document.getElementById("display").innerHTML;
        let btn_valor=document.getElementById("sete").value;
        document.getElementById("display").innerHTML = num+btn_valor;
        bloqueio=1;
        bloqueio2=1;
        ++limite; 
        if(sound==1){
            let music = new Audio('files/click.mp3')
            music.play();}}

    
}

function oito(){
    if(limite<17){
        if (bloqueio==0){
            let num="";
            document.getElementById("display").innerHTML = num;}
        let num=document.getElementById("display").innerHTML;
        let btn_valor=document.getElementById("oito").value;
        document.getElementById("display").innerHTML = num+btn_valor;
        bloqueio=1;
        bloqueio2=1;
        ++limite; 
        if(sound==1){
            let music = new Audio('files/click.mp3')
            music.play();}}

    
}

function nove(){
    if(limite<17){
        if (bloqueio==0){
            let num="";
            document.getElementById("display").innerHTML = num;}
        let num=document.getElementById("display").innerHTML;
        let btn_valor=document.getElementById("nove").value;
        document.getElementById("display").innerHTML = num+btn_valor;
        bloqueio=1;
        bloqueio2=1;
        ++limite; 
        if(sound==1){
            let music = new Audio('files/click.mp3')
            music.play();}}

    
}

function zero(){
    if(limite<17){
        if (bloqueio==0){
            let num="";
            document.getElementById("display").innerHTML = num;}
        let num=document.getElementById("display").innerHTML;
        let btn_valor=document.getElementById("zero").value;
        document.getElementById("display").innerHTML = num+btn_valor;
        bloqueio=1;
        bloqueio2=1;
        ++limite; 
        if(sound==1){
            let music = new Audio('files/click.mp3')
            music.play();}}

    
}
function ponto(){
    if(limiteP<1){
        if(bloqueio2==1){
            let num=document.getElementById("display").innerHTML;
            let btn_valor=document.getElementById("ponto").value;
            document.getElementById("display").innerHTML = num+btn_valor;
            bloqueio=1;
            bloqueio2=1;
            ++limiteP; 
            if(sound==1){
                let music = new Audio('files/click.mp3')
                music.play();}}}

    
}



function mais(){
    if(sound==1){
        let music = new Audio('files/click.mp3')
        music.play();}
    if (bloqueio2==1){
        num_1=parseFloat(document.getElementById("display").innerHTML);
        operador=1;
        bloqueio=0;
        limite=0;
        limiteP=0;
      
    }
        
        

    
 


    
}
function menos(){
    if(sound==1){
        let music = new Audio('files/click.mp3')
        music.play();}
    if (bloqueio2==1){
        num_1=parseFloat(document.getElementById("display").innerHTML);
        operador=2;
        bloqueio=0;
        limite=0;
        limiteP=0;
      
    }

    
}

function mult(){
    if(sound==1){
        let music = new Audio('files/click.mp3')
        music.play();}
    if (bloqueio2==1){
   
    num_1=parseFloat(document.getElementById("display").innerHTML);
    operador=3;
    bloqueio=0;
    limite=0;
    limiteP=0;}
    
 
       
    
}
function dividir(){
    if(sound==1){
        let music = new Audio('files/click.mp3')
        music.play();}
    if(bloqueio2==1){
    num_1=parseFloat(document.getElementById("display").innerHTML);
    operador=4;
    bloqueio=0;
    limite=0;
    limiteP=0;}
   
    
}



function igual(){
    if(sound==1){
        let music = new Audio('files/click.mp3')
        music.play();}
    if (bloqueio==1){
        let num_2=parseFloat(document.getElementById("display").innerHTML);
        switch (operador){
            case 1:
                result=num_1+num_2;
                document.getElementById("display").innerHTML = result;
                operador=0;
                bloqueio=0;
                limite=0;
                limiteP=0;
                
              
                break;
            case 2:
                result=num_1-num_2;
                document.getElementById("display").innerHTML = result;
                operador=0;
                bloqueio=0;
                limite=0;
                limiteP=0;
                break;
            case 3:
                result=num_1*num_2;
                document.getElementById("display").innerHTML = result;
                operador=0;
                bloqueio=0;
                limite=0;
                limiteP=0;
               
                break;
            case 4:
                result=num_1/num_2;
                document.getElementById("display").innerHTML = result;
                operador=0;
                bloqueio=0;
                limite=0;
                limiteP=0;
                
                break;
            }}
   
   




    
}

