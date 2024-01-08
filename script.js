var p1 = Math.random()*6;
p1 = Math.floor(p1)+1;

var p2 = Math.random()*6;
p2 = Math.floor(p2)+1;

if(p1>p2){
    document.querySelector("h1").textContent = "player 1 wins";
}else if(p1<p2){
    document.querySelector("h1").textContent = "player 2 wins";
}else{
    document.querySelector("h1").textContent = "draw";
}

for(var i = 1; i<=6; i++){
if(p1==i){
    document.querySelector(".img1").setAttribute("src","./images/dice"+p1+".png");  
}
}

for(var i = 1; i<=6; i++){
    if(p2==i){
        document.querySelector(".img2").setAttribute("src","./images/dice"+p2+".png");  
    }
    }



