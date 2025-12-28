const kody=["1310"];
const valentines_handle=document.querySelector('.valentines');
valentines_handle.addEventListener('click',Do_animation_for_card)
const card_handle=document.querySelector('.card');
const text1_handle_card=document.getElementById('text_1_card_1');
let kod_main;
const Dalej=()=>{
    let czy_wazny_kod=false;
    const input_handle=document.getElementById("input_1_id");
    let kod=input_handle.value;

    for(let item of kody){
        if(kod==item){
        czy_wazny_kod=true;
        break;     
        }
    }
    if(czy_wazny_kod){
        switch(kod){
            case "1310":
                kod_main="Testowy Kod";
                break;
            
            default:
                kod_main="";
                break;
            
        }
        if(kod_main!=""){
            Hide_login();
        }
        
    }
    else{
        const zly_kod_place_handle=document.getElementById("zly_kod_id");
        zly_kod_place_handle.innerHTML='Podano zły kod';
        zly_kod_place_handle.style.display='block';
        input_handle.value="";
    }
   
}
const Hide_login=()=>{
    const all_handle=document.getElementById("place_1");
    all_handle.style.animation='';
    all_handle.style.animation='1s hide forwards';
    let body=document.querySelector('body');
    body.style.animation='1s change_colour forwards'
    all_handle.addEventListener('animationend',Clear_and_show_place_2);
}
const Clear_and_show_place_2=()=>{
    const all_handle=document.getElementById("place_1");
    all_handle.removeEventListener('animationend',Clear_and_show_place_2);
    const all_2_handle=document.getElementById("place_2");
    all_2_handle.style.display='flex';    
    const cont_handle=document.getElementById("cont_1");
    cont_handle.style.display='flex';
    cont_handle.style.animation='0.9s show forwards';

    
}

function Do_animation_for_card() {
    card_handle.style.transition = 'transform 1s ease-in-out';
    card_handle.style.transform = 'translateY(-410px)';
    text1_handle_card.style.animation='0.6s hide forwards';
    setTimeout(Start_big_card_animation, 1000);
}

function Start_big_card_animation() {
    valentines_handle.removeEventListener('click',Do_animation_for_card)
    card_handle.style.transition = 'transform 1s ease-in-out';
    card_handle.style.animation='1.8s bigger_card forwards';
    card_handle.style.position = 'absolute';
    card_handle.style.top = '50%';
    card_handle.style.left = '50%';
    card_handle.style.transform = 'translate(-50%, -50%)';
    card_handle.style.zIndex='12';
    card_handle.addEventListener('animationend',Show_text_for_card);
}
const Show_text_for_card=()=>{
    card_handle.removeEventListener('animationend',Show_text_for_card);
    text1_handle_card.style.opacity=0;
    text1_handle_card.innerHTML=`<span class='normal_text_handle_place'>Droga Babciu, <br></br>
    z okazji Twoich 70. urodzin życzę Tobie dużo zdrowia, szczęścia, spokoju oraz radości. <br></br>
    
    Chcę Tobie podziękować za to, że zawsze byłaś przy mnie. Za to, że w każdej chwili mogłem do Ciebie przyjechać - na obiad, na rozmowę albo po prostu pobyć razem. <br></br>
    
    Dziękuję Tobie za troskę, cierpliwość i opiekę, którą okazywałaś mi już od najmłodszych lat. <br></br>
   
    
    Życzę Tobie, aby każdy kolejny rok przynosił Tobie zdrowie, spokój i wiele pięknych chwil. Dziękuję za wszystko, co mi dałaś. <br></br> Sto lat!</span>`;
    text1_handle_card.style.animation='0.9s show forwards';
}