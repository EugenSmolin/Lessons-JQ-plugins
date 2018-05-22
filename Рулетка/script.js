var tokens = 25;
var wheels, wheels_cur, wheels_tar;
var choices = ["cherry","banana","apple","cherry","melon","cherry","banana","7","banana","melon","apple","777","[BAR]","apple","melon"];
//var choices = ['clubs.png','diamonds.png','hearts.png','spades.png'];

function MakeEm(){
    var i, slots, a_wheel;
    slots = document.getElementById("slot_machine");
    slots.innerHTML = "";
    a_wheel = "<select name='wheel' size='5'></select>";
    //a_wheel = "<span class='window' name='wheel'></span>";
    for(i = 0;i<3;i++){
        slots.innerHTML += a_wheel;
    }
    wheels = document.getElementsByName("wheel");
    wheels_cur = new Array(wheels.length);
    wheels_tar = new Array(wheels.length);
    var x;
    for(x=0;x<wheels.length;x++){
        wheels_cur[x] = 0;
    }
    GraphEm();
    frmChoice.txtTokens.value="25";
}

function SpinEm(){
    var x, y;
    y = 0;
    for(x=0;x<wheels.length;x++){
        y = Math.floor((Math.random() * choices.length) + y + 2 * choices.length);
        wheels_tar[x] = (wheels_cur[x] + y);
    }
    setTimeout("NudgeEm();",10);
    document.getElementById("slot_arm").disabled = true;
}

function NudgeEm(){
    var x;
    var done = true;
    for(x=0;x<wheels.length;x++){
        if(wheels_tar[x] != wheels_cur[x]){
            wheels_cur[x] = (wheels_cur[x] + 1);
            done = false;
        }
    }
    GraphEm();
    for(x=0;x<wheels.length;x++){
        if(wheels_tar[x] == wheels_cur[x]){
            wheels[x].selectedIndex=2;
        }
    }
    if(done){
        PayEm();
    }
    else{
        setTimeout("NudgeEm();",20);
    }
}

// добавление option (картинок,ячеек) в блок "Рулетка"
function GraphEm(){
    var x;
    var y;
    var opt;
    for(x = 0;x < wheels.length;x++){
        CleanEm(wheels[x]);
        for(y = 0;y < 5;y++){
            opt = ((choices.length - 1) + wheels_cur[x] - 1 + y) % choices.length;
            wheels[x].options[y] = new Option(choices[opt],choices[opt]);

        }
    }
}

function CleanEm(elem){
    var i;
    for(i=elem.options.length-1;i>=0;i--){
        elem.options[i] = null;
    }
}

// Выиграшные комбинации
function PayEm(){
    //center row
    // 1 cherry - 1 tokens
    // 2 cherry - 5 tokens
    // 2 fruit + 1 cherry  - 25 tokens
    // 3 fruit  - 25 tokens
    // 3 cherry - 25 tokens
    // 2 7's    - 35 tokens
    // 2 777's  - 35 tokens
    // 2 7's, 1 777 - 40 tokens
    // 1 7, 2 777's - 50 tokens
    // 3 7's   - 125 tokens
    // 3 777's - 250 tokens
    // 3 bars - 500 tokens
    var x;
    var cherries, apples, melons, bananas, sevens, triples, bars;
    cherries = 0;
    apples = 0;
    melons = 0;
    bananas = 0;
    sevens = 0;
    triples = 0;
    bars = 0;
    for(x=0;x<wheels.length;x++){
        switch(wheels[x].options[2].value){
            case "cherry":
                cherries++;
                break;
            case "apple":
                apples++;
                break;
            case "melon":
                melons++;
                break;
            case "banana":
                bananas++;
                break;
            case "7":
                sevens++;
                break;
            case "777":
                triples++;
                break;
            case "[bar]":
                bars++;
                break;
        }    
    }
    if(bars == 3){
        FlashEm(500);
    }
    else if(triples == 3){
        FlashEm(250);
    }
    else if(sevens == 3){
        FlashEm(125);
    }
    else if((triples == 2)&&(sevens==1)){
        FlashEm(50);
    }
    else if((triples == 1)&&(sevens==2)){
        FlashEm(40);
    }
    else if(cherries==3){
        FlashEm(25);
    }
    else if((apples == 3)||(melons==3)||(bananas==3)){
        FlashEm(25);
    }
    else if(cherries==2){
        FlashEm(15);
    }
    else if(((apples == 2)||(melons==2)||(bananas==2))&&(cherries==1)){
            FlashEm(25);
    }
    else if((triples == 2)||(sevens==2)){
        FlashEm(35);
    }
    else if(cherries==1){
        FlashEm(1);
    }
        document.getElementById("slot_arm").disabled = false;
}

// Окно светится если выиграл
function FlashEm(num){
    var msg = document.getElementById("message");
    if(msg.style.borderColor != "red"){
        msg.innerText = "Winner!";
        msg.style.borderStyle = "dotted";
        msg.style.borderColor = "red";
    }
    else{
        msg.innerText = "Winner!";
        msg.style.borderStyle = "dashed";
        msg.style.borderColor = "yellow";
    }
    if(num == 0){
        msg.innerText = "Tarwn's Slot Machine!";
        msg.style.borderStyle = "solid";
        msg.style.borderColor = "#AAAACC";
    }
    else{
        frmChoice.txtTokens.value = parseInt(frmChoice.txtTokens.value) + 1;
        setTimeout("FlashEm(" + (num - 1) + ");",100);
    }
}

// Кнопка крутить барабан
function ChargeEm(){
    var amt = parseInt(frmChoice.txtTokens.value);
    if(amt == 0){
        alert("You seem to be out of cash, better luck next time.")
    }
    else{
        amt = amt - 1;
        frmChoice.txtTokens.value = amt;
    }

    SpinEm();
}