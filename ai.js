rock = "<img class='img-responsive img-fluid c1' src='rock.png'>"
paper = "<img class='img-responsive img-fluid c1' src='paper.png'>"
scissors = "<img class='img-responsive img-fluid c1' src='scissors.png'>"
function rps(x){
	if (x==1){
		document.getElementById('player').innerHTML= rock
	}else if(x==2){
		document.getElementById('player').innerHTML= paper
	}else if(x==3){
		document.getElementById('player').innerHTML= scissors
	}
	ai(x)
	
}

function ai(p){
	x = Math.floor(Math.random()*3)+1 //vreates random number range (0-3)
	if (x==1){
		document.getElementById('ai').innerHTML=rock
	}else if(x==2){
		document.getElementById('ai').innerHTML=paper
	}else if(x==3){
		document.getElementById('ai').innerHTML=scissors
	}
	score(x,p)

}

function score (ai,p){
	win = "<h1 class='win'>You Win</h1>"
	loo = "<h1 class='loo'>You Loose</h1>"
	tie = "<h1 class='tie'>Its a tie!</h1>"
	if ((p==1)&&(ai==3)){
		document.getElementById('res').innerHTML = win
		val=parseInt(document.getElementById('sp').innerText)
		document.getElementById('sp').innerHTML = val+1
	}else if((p==3)&&(ai==2)){
		document.getElementById('res').innerHTML = win
		val=parseInt(document.getElementById('sp').innerText)
		document.getElementById('sp').innerHTML = val+1
	}else if((p==2)&&(ai==1)){
		document.getElementById('res').innerHTML = win
		val=parseInt(document.getElementById('sp').innerText)
		document.getElementById('sp').innerHTML = val+1
	}else if((p==1)&&(ai==1)){
		//tie
		document.getElementById('res').innerHTML = tie
	}else if((p==2)&&(ai==2)){
		//tie
		document.getElementById('res').innerHTML = tie
	}else if((p==3)&&(ai==3)){
		//tie
		document.getElementById('res').innerHTML = tie
	}else{
		document.getElementById('res').innerHTML = loo
		val = parseInt(document.getElementById('sa').innerText)
		document.getElementById('sa').innerHTML = val+1
	}
	ai = parseInt(document.getElementById('sa').innerText)
	p = parseInt(document.getElementById('sp').innerText)
	bestof = 3
	if (p==bestof){
		document.getElementById('over').innerHTML = "<div class='ino'><h1 class='win'>Victory!</h1><input type='button' value='Reset' onClick='window.location.reload()'></div>"
		document.getElementById('over1').innerHTML = "<h1>You Won!</h1>"
	}else if(ai==bestof){
		document.getElementById('over').innerHTML = "<div class='ino'><h1 class='loo'>Game Over :c</h1><input type='button' value='Reset' onClick='window.location.reload()'></div>"
		document.getElementById('over1').innerHTML = "<h1>You Loose </h1>"
	}

}
