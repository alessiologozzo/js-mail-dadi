let submitButton = document.getElementById("submit");
let namesButton = document.getElementById("names");
let namesList = document.querySelector("#names div");
let mailName = [];
let mail = ["antonio@mail.it", "gennaro@mail.it", "genoveffa@mail.it", "lollobrigida@mail.it",
"asdrubale@mail.it", "marcello@mail.it", "raniera@mail.it"];
let height;
let span = document.querySelector("#names span");
let label = document.querySelector("h5");
let input = document.getElementById("input");
const MS = 1000;
let first = new Boolean();
let row, element;
let resetButton = document.getElementById("reset");

submitButton.addEventListener("click", start);
namesButton.addEventListener("click", showNames);
resetButton.addEventListener("click", restart);
setup();


function setup(){

    for(let i = 0; i < mail.length; i++){
        mailName[i] = document.createElement("div");
        mailName[i].textContent = mail[i];
        namesList.appendChild(mailName[i]);
    }
    
    height = namesList.offsetHeight;
    document.documentElement.style.setProperty("--height", height + "px");
    document.documentElement.style.setProperty("--ms", MS + "ms");
    namesList.classList.add("al-none");
    first = true;
}
function showNames(){

    if(namesList.classList.contains("al-none")){
        show();
    }
    else
        hide();

}

function show(){

    namesList.classList.remove("animation-reverse", "al-none");
    namesList.classList.add("animation");
    span.classList.add("al-decoration");
    span.innerHTML = "E-mail nel database:<br><br>";
}

function hide(){
    namesList.classList.remove("animation");
    namesList.classList.add("al-none", "animation-reverse");
    span.classList.remove("al-decoration");
    span.innerHTML = "...";
}

function checkInput(){
    
    let s = input.value;
    bool = new Boolean();
    bool = false;

    for(let i = 0; i < mail.length; i++){
        result = s.localeCompare(mail[i]);
        if(result == 0){
            bool = true;
            break;
        }
    }

    return bool;

}

function start(){

    if(checkInput()){
        changeInterface();
    }
    else{
        input.value = "";
        input.placeholder = "Errore! Riprova";
    }
}

function changeInterface(){
    label.classList.add("d-none");
    input.classList.add("d-none");
    namesButton.classList.add("d-none");
    submitButton.textContent = "Lancia i dadi";
    submitButton.removeEventListener("click", start);
    submitButton.addEventListener("click", play);
    resetButton.classList.remove("d-none");
}

function play(){

    if(!first)
        row.removeChild(element);
    else
        first = false;
    row = document.getElementById("row");
    element = document.createElement("div");
    element.classList.add("al-result-box", "my-4");
    let player = new Number;
    let computer = new Number;

    player = Math.floor(Math.random() * 6) + 1;
    computer = Math.floor(Math.random() * 6) + 1;

    if(player > computer)
        element.textContent = "Hai vinto! Il tuo punteggio:  " + player + " Punteggio avversario: " + computer;
    else if( player < computer)
        element.textContent = "Hai perso! Il tuo punteggio:  " + player + " Punteggio avversario: " + computer;
    else
        element.textContent = "Pareggio! Il tuo punteggio:  " + player + " Punteggio avversario: " + computer;

        row.appendChild(element);
    }

    function restart(){
        
        if(!first){
            row.removeChild(element);
            first = true;
        }

        label.classList.remove("d-none");
        input.classList.remove("d-none");
        input.value = "";
        input.placeholder = "Inserisci mail...";
        namesButton.classList.remove("d-none");
        submitButton.textContent = "Login";
        submitButton.removeEventListener("click", play);
        submitButton.addEventListener("click", start);
        resetButton.classList.add("d-none");
        namesList.classList.remove("animation", "animation-reverse");
    }