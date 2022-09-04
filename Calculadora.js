var operador=0;
var num_1=0;
var bloqueio=false;
var result=0;
var bloqueio2=false;
var limite=0;
var limiteP=0;
var sound=false;
var mais_menos=false;
var bloqueio3=false;
var bloqueio4=false;
var bloqueio5=true;
var maisMenos="";
var mais_menos2=true;


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
    bloqueio2=false;
    limite=0;
    limiteP=0;
    mais_menos=false;
    bloqueio3=false;
    bloqueio4=false;
    bloqueio5=true;
    maisMenos="";
    
    if(sound){
        let music = new Audio('files/click.mp3')
        music.play();}

    
}

function MN(){
    if(limite<17){
        if(sound){
        let music = new Audio('files/click.mp3')
        music.play();}
        if(bloqueio2){
            if(mais_menos==false){
                let x=document.getElementById("display").innerHTML;
                document.getElementById("display").innerHTML = -x;
                mais_menos=true;
                ++limite;}
                else{
                    let x=document.getElementById("display").innerHTML;
                    document.getElementById("display").innerHTML = -x;
                    mais_menos=false;
                --limite;}
             if (mais_menos2){
                 let y=document.getElementById('display').innerHTML;
                 document.getElementById("display2").innerHTML = maisMenos+y;
                 mais_menos2=false;
             }
            else{
                let y=document.getElementById('display').innerHTML;
                document.getElementById("display2").innerHTML = maisMenos+y;
                mais_menos2=true;

            }
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
        if(bloqueio4==false){
            let dis2="";
            document.getElementById("display2").innerHTML = dis2;
            bloqueio4=true;
        }
        let num2=document.getElementById("display2").innerHTML;
        document.getElementById("display2").innerHTML = num2+btn_valor;
        bloqueio=true;
        bloqueio2=true;
        ++limite;
        bloqueio3=true;
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
        if(bloqueio4==false){
            let dis2="";
            document.getElementById("display2").innerHTML = dis2;
            bloqueio4=true;
         }
        let num2=document.getElementById("display2").innerHTML;
        document.getElementById("display2").innerHTML = num2+btn_valor;
        bloqueio=true;
        bloqueio2=true;
        ++limite;
        bloqueio3=true;
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
        if(bloqueio4==false){
            let dis2="";
            document.getElementById("display2").innerHTML = dis2;
            bloqueio4=true;
         }
        let num2=document.getElementById("display2").innerHTML;
        document.getElementById("display2").innerHTML = num2+btn_valor;
        bloqueio=true;
        bloqueio2=true;
        ++limite;
        bloqueio3=true;
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
        if(bloqueio4==false){
            let dis2="";
            document.getElementById("display2").innerHTML = dis2;
            bloqueio4=true;
         }
        let num2=document.getElementById("display2").innerHTML;
        document.getElementById("display2").innerHTML = num2+btn_valor;
        bloqueio=true;
        bloqueio2=true;
        ++limite;
        bloqueio3=true;
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
        if(bloqueio4==false){
            let dis2="";
            document.getElementById("display2").innerHTML = dis2;
            bloqueio4=true;
         }
        let num2=document.getElementById("display2").innerHTML;
        document.getElementById("display2").innerHTML = num2+btn_valor;
        bloqueio=true;
        bloqueio2=true;
        ++limite;
        bloqueio3=true;
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
        if(bloqueio4==false){
            let dis2="";
            document.getElementById("display2").innerHTML = dis2;
            bloqueio4=true;
         }
        let num2=document.getElementById("display2").innerHTML;
        document.getElementById("display2").innerHTML = num2+btn_valor;
        bloqueio=true;
        bloqueio2=true;
        ++limite;
        bloqueio3=true;
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
        if(bloqueio4==false){
            let dis2="";
            document.getElementById("display2").innerHTML = dis2;
            bloqueio4=true;
         }
        let num2=document.getElementById("display2").innerHTML;
        document.getElementById("display2").innerHTML = num2+btn_valor;
        bloqueio=true;
        bloqueio2=true;
        ++limite;
        bloqueio3=true;
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
        if(bloqueio4==false){
            let dis2="";
            document.getElementById("display2").innerHTML = dis2;
            bloqueio4=true;
         }
        let num2=document.getElementById("display2").innerHTML;
        document.getElementById("display2").innerHTML = num2+btn_valor;
        bloqueio=true;
        bloqueio2=true;
        ++limite;
        bloqueio3=true;
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
        if(bloqueio4==false){
            let dis2="";
            document.getElementById("display2").innerHTML = dis2;
            bloqueio4=true;
         }
        let num2=document.getElementById("display2").innerHTML;
        document.getElementById("display2").innerHTML = num2+btn_valor;
        bloqueio=true;
        bloqueio2=true;
        ++limite;
        bloqueio3=true;
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
        if(bloqueio4==false){
            let dis2="";
            document.getElementById("display2").innerHTML = dis2;
            bloqueio4=true;
         }
        let num2=document.getElementById("display2").innerHTML;
        document.getElementById("display2").innerHTML = num2+btn_valor;
        bloqueio=true;
        bloqueio2=true;
        ++limite;
        bloqueio3=true;
        if(sound){
            let music = new Audio('files/click.mp3')
            music.play();}}

    
}
function ponto(){
    if(limite<15){
        if(bloqueio3){
            if(limiteP<1){
                    let num=document.getElementById("display").innerHTML;
                    let btn_valor=document.getElementById("ponto").value;
                    document.getElementById("display").innerHTML = num+btn_valor;
                if(bloqueio4==false){
                    let dis2="";
                    document.getElementById("display2").innerHTML = dis2;
                    bloqueio4=true;
                }
                let num2=document.getElementById("display2").innerHTML;
                document.getElementById("display2").innerHTML = num2+btn_valor;
                bloqueio=true;
                bloqueio2=true;
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
    if (bloqueio2){
          if(bloqueio5){
              num_1=parseFloat(document.getElementById("display").innerHTML);
              let numero=String(num_1);
              maisMenos=numero+'+';
              document.getElementById("display2").innerHTML = maisMenos;
              operador=1;
              bloqueio=false;
              limite=0;
              limiteP=0;
              bloqueio2=false;
              bloqueio3=false;
              bloqueio4=true;
              bloqueio5=false;}
      
    }
        
        

    
 


    
}
function menos(){
    if(sound){
        let music = new Audio('files/click.mp3')
        music.play();}
    if (bloqueio2){
          if(bloqueio5){
              num_1=parseFloat(document.getElementById("display").innerHTML);
              let numero=String(num_1);
              maisMenos=numero+'-';
              document.getElementById("display2").innerHTML = maisMenos;
              operador=2;
              bloqueio=false;
              limite=0;
              limiteP=0;
              bloqueio2=false;
              bloqueio3=false;
              bloqueio4=true;
              bloqueio5=false;}
      
    }

    
}

function mult(){
    if(sound){
        let music = new Audio('files/click.mp3')
        music.play();}
    if (bloqueio2){
          if(bloqueio5){
              num_1=parseFloat(document.getElementById("display").innerHTML);
              let numero=String(num_1);
              maisMenos=numero+'x';
              document.getElementById("display2").innerHTML = maisMenos;
              operador=3;
              bloqueio=false;
              limite=0;
              limiteP=0;
              bloqueio2=false;
              bloqueio3=false;}}
    
 
       
    
}
function dividir(){
    if(sound){
        let music = new Audio('files/click.mp3')
        music.play();}
    if(bloqueio2){
          if(bloqueio5){
              num_1=parseFloat(document.getElementById("display").innerHTML);
              let numero=String(num_1);
              maisMenos=numero+'/';
              document.getElementById("display2").innerHTML = maisMenos;
              operador=4;
              bloqueio=false;
              limite=0;
              limiteP=0;
              bloqueio2=false;
              bloqueio3=false;
              bloqueio4=true;
              bloqueio5=false;}
    
    }
   
    
}



function igual(){
    if(sound){
        let music = new Audio('files/click.mp3')
        music.play();}
    if (bloqueio){
        let num_2=parseFloat(document.getElementById("display").innerHTML);
        switch (operador){
            case 1:
                result=num_1+num_2;
                let res=String(result);
                document.getElementById("display").innerHTML = res.substr(0,15);
                let num=document.getElementById("display2").innerHTML;
                document.getElementById("display2").innerHTML = num+'='+res.substring(0,15);
                operador=0;
                bloqueio=false;
                limite=0;
                limiteP=0;
                bloqueio3=false;
                bloqueio4=false;
                maisMenos="";
                bloqueio5=true;
              
                break;
            case 2:
                result=num_1-num_2;
                let res1=String(result);
                document.getElementById("display").innerHTML = res1.substr(0,15);
                let num1=document.getElementById("display2").innerHTML;
                document.getElementById("display2").innerHTML = num1+'='+res1.substring(0,15);
                operador=0;
                bloqueio=false;
                limite=0;
                limiteP=0;
                bloqueio3=false;
                bloqueio4=false;
                maisMenos="";
                bloqueio5=true;
                
                break;
            case 3:
                result=num_1*num_2;
                let res2=String(result);
                document.getElementById("display").innerHTML = res2.substr(0,15);
                let num2=document.getElementById("display2").innerHTML;
                document.getElementById("display2").innerHTML = num2+'='+res2.substring(0,15);
                operador=0;
                bloqueio=false;
                limite=0;
                limiteP=0;
                bloqueio3=false;
                bloqueio4=false;
                maisMenos="";
                bloqueio5=true;
               
                break;
            case 4:
                result=num_1/num_2;
                let res3=String(result);
                document.getElementById("display").innerHTML = res3.substr(0,15);
                let num3=document.getElementById("display2").innerHTML;
                document.getElementById("display2").innerHTML = num3+'='+res3.substring(0,15);
                operador=0;
                bloqueio=false;
                limite=0;
                limiteP=0;
                bloqueio3=false;
                bloqueio4=false;
                maisMenos="";
                bloqueio5=true;
                
                break;
            }}
   
   




    
}



