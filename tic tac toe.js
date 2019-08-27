var block = document.querySelectorAll("td");
var arr = [];
var player = "first";
var isWin = false;
var message = document.querySelector("#winMessage");
message.textContent = "Turn of Player 1!";

function putX(b){
	b.textContent = "X";
	b.classList.add("first");
}
function putO(b){
	b.textContent = "O";
	b.classList.add("second");
}
function hasClass(b){
	var num = b.classList.length;
	for(var i=0;i<num;i++){
		if(b.classList[i] =="first"){
			return "first";
		}
		if(b.classList[i] =="second"){
			return "second";
		}
	}
	return "No";
}
function checkWin(p){
	for(var i=0;i<7;i+=3)
    {
        if(hasClass(block[i])==hasClass(block[i+1])&&hasClass(block[i+1])==hasClass(block[i+2])&&hasClass(block[i])==p)
        {
            return true;
        }
    }
	for(var i=0;i<3;i++)
    {
        if(hasClass(block[i])==hasClass(block[i+3])&&hasClass(block[i+3])==hasClass(block[i+6])&&hasClass(block[i])==p)
        {
            return true;
        }
    }
    if(hasClass(block[0])==hasClass(block[4])&&hasClass(block[4])==hasClass(block[8])&&hasClass(block[0])==p){
        return true;
    }
    if(hasClass(block[2])==hasClass(block[4])&&hasClass(block[4])==hasClass(block[6])&&hasClass(block[2])==p){
        return true;
    }
    return false;
}
function checkDraw(){
	for(var i=0;i<9;i++){
		if(hasClass(block[i])=="No"){
			return false;
		}
	}
	return true;
}
for(var i=0;i<block.length;i++){
	block[i].addEventListener("click",function(){
		if(hasClass(this)=="No" && !isWin){
			if(player=="first"){
				putX(this);
				if(checkWin(player)==true){
					message.textContent = "Player 1 Win!";
					isWin = true;
				}
				else if(!checkDraw()){
					player = "second";
					message.textContent = "Turn of Player 2!";
				}
				else{
					message.textContent = "Game Draw!";
				}
			}
			else if(!isWin){
				putO(this);
				if(checkWin(player)==true){
					message.textContent = "Player 2 Win!";
					isWin = true;
				}
				else if(!checkDraw()){
					player = "first";
					message.textContent = "Turn of Player 1!";
				}
				else{
					message.textContent = "Game Draw!";
				}
			}
		}
	});
}