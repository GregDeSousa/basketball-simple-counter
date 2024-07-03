let Score1=document.getElementById("score_1")
let Score2=document.getElementById("score_2")
let points_1=0
let points_2=0


function add1_player1(){
    points_1+=1
    Score1.innerText=points_1
}

function add2_player1(){
    points_1+=2
    Score1.innerText=points_1
}

function add3_player1(){
    points_1+=3
    Score1.innerText=points_1
}

function add1_player2(){
    points_2+=1
    Score2.innerText=points_2
}

function add2_player2(){
    points_2+=2
    Score2.innerText=points_2
}

function add3_player2(){
    points_2+=3
    Score2.innerText=points_2
}