
var randomno1=Math.floor(Math.random()*6)+1;
//dice1.png-dice6.png
var randomDiceImage="dice"+randomno1+".png";
//images/dice1.png-images/dice6.png
var randomImageSource="images/"+randomDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

//repeat the same process for dice two
var randomno2=Math.floor(Math.random()*6)+1;
//dice1.png-dice6.png
var randomDiceImage2="dice"+randomno2+".png";
//images/dice1.png-images/dice6.png
var randomImageSource2="images/"+randomDiceImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2)

//if the player 1 wins
if(randomno1>randomno2)
{
    document.querySelector("h1").innerHTML="😊 Player 1 Wins!!";
}
else if(randomno1<randomno2)
{
    document.querySelector("h1").innerHTML="😊 Player 2 Wins!!";
}
else
{
    document.querySelector("h1").innerHTML="DRAW!";
}