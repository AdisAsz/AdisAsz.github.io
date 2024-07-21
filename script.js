const kody=["A","ABXZ12","MKLT34","QWER56","ZXCV78","TGBN34","YUIO12","HJKL34","BNMP56","RTYU78","QWAS90","ERDF12"];
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
            case "A":
                kod_main="Testowy Kod";
                break;
            case "ABXZ12":
                kod_main="Katarzyne Szymanska";
                break;
            case "MKLT34":
                kod_main="Przemyslawa Szymanskiego";
                break;
            case "QWER56":
                kod_main="Marie Szymanska";
                break;
            case "ZXCV78":
                kod_main="Darie Bature";
                break;
            case "TGBN34":
                kod_main="Anete Bature";
                break;
            case "YUIO12":
                kod_main="Bogumile Ratajczak";
                break;
            case "HJKL34":
                kod_main="Barbare Szymanska";
                break;
            case "BNMP56":
                kod_main="Mariusza Szymanskiego";
                break;
            case "RTYU78":
                kod_main="Oliwie Szymanska";
                break;
            case "CXZA90":
                kod_main="Urszule Szymanska";
                break;
            case "ERDF12":
                kod_main="Zofie Hadyniak";
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
    text1_handle_card.innerHTML=`<span class='title_card'>Zaproszenie</span><br><br><br><span class='normal_text_handle_place'>Serdecznie zapraszam</span> <br><br> <span class='name_of_the_person'> ${kod_main}</span><br><br> <span class='normal_text_handle_place'>na przyjecie z okazji moich</span><br><br><br> <span class='title_card'>18 urodzin,</span> <br><br><br> <span class='normal_text_handle_place'>które odbedzie sie dnia</span> <br><br> <span class='name_of_the_person'> 3 SIERPNIA  O GODZINIE 15:00 <br> <br> W ZALASEWIE</span><br><br><br> <span class='normal_text_handle_place'>prosze o potwierdzenie przybycia <br> do dnia 1 sierpnia pod numerem <br> 724 604 670</span> <br><br> <span class='author_place'>Adam Szymański</span>`;
    text1_handle_card.style.animation='0.9s show forwards';
}