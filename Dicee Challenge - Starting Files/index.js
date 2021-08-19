var randomNumber1 = Math.floor(Math.random()*5)+1
var randomNumber2 = Math.floor(Math.random()*5)+1

document.querySelector(".img1").src = "./images/dice"+randomNumber1+".png"
document.querySelector(".img2").src = "./images/dice"+randomNumber2+".png"

if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML = "DRAW"

}
else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS"
}
else{
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS"
}