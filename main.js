
var background = document.getElementById("background");
var headingOne = document.getElementById("heading1");
var headingThree = document.getElementById("heading3");
var image = document.getElementById("image");
var messageOne = document.getElementById("message_1");
var messageTwo = document.getElementById("message_2");

var buttonOne = document.getElementById("button_1");
var buttonTwo = document.getElementById("button_2");

var btn_Look, btn_Take, btn_Use, btn_Open, btn_Hit;

btn_Look = document.getElementById("Look");
btn_Take = document.getElementById("Take");
btn_Use = document.getElementById("Use");
btn_Open = document.getElementById("Open");
btn_Hit = document.getElementById("Hit");


var image = document.getElementById("image");



var preAttack = new Audio();
preAttack.src = "beginAttack.ogg";

var preEnemyAtk = new Audio();
preEnemyAtk.src = "beginEnemyAttack.ogg";

var pickUpSE = new Audio();
pickUpSE.src = "pickUp.ogg";

var hit = new Audio();
hit.src = "EnemyAttack.ogg";

var doorOpen = new Audio();
doorOpen.src = "DoorOpen.ogg";



//  *  *  *  *  OUTSIDE: ENTRANCE  *  *  *  *  *  *  *
var entrance = {
	playerIsHere: true,
	room: "Entrance",
	description: "There's a large wooden door blocking your entry. Atop the door sits a skull shaped object.",
	keys: 1,
	choices: ["Hit the Skull"],
	switches: [false, false], //assign switches room by room.
	hitSkull: function() {
		flashScreenWhite()
		hit.play();
		image.src = "img/EntranceKey.png";
		messageOne.innerHTML = "You strike the skull with reckless force! The jaw of the skull falls and with it a KEY!";
		buttonOne.innerHTML = "Take Key";
		buttonOne.onclick = entrance.takeKey;
		buttonTwo.style.display = "none";
	},
	takeKey: function() {
		
		flashScreenWhite()
		pickUpSE.play();
		image.src = "img/EntranceKeyTaken.png";
		messageOne.innerHTML = "You squat down and pick up the fallen key. Success! It feels good to do something right for once."
		messageTwo.innerHTML = " Now that you've got a key, I think we both know what you should do...";
		messageTwo.style.display = "block";
		buttonOne.innerHTML = " Check your shoe; it smells like you stepped in something..";
		buttonOne.onclick = entrance.checkShoe;
		//buttonOne.style.display = "none";
		buttonTwo.style.display = "inline";
		buttonTwo.innerHTML = " Use the Key on the Door";
		buttonTwo.onclick = entrance.useKey;
		
	},
	checkShoe: function() {
		alert(" You check your heroic leather boots to see only to realize that you didn't step in anything. That's just how it smells here..")
	},
	useKey: function() {
		
		flashScreenWhite()
		doorOpen.play();
		messageOne.innerHTML = "Aha! The key glides into the lock like butter and turns like a new Lamborghini! Few things are as satisfying.";
		//alert("key used");
		messageTwo.innerHTML = "As you pull the door open, it creeks loudly; it's actually hurting your ears.  Alas, the door opens and you can enter The Dungeon!"
		messageTwo.style.display = "block";
		buttonOne.innerHTML = "Enter the Dungeon";
		buttonOne.onclick = entryWay.start;
		buttonTwo.style.display = "none";
		image.src = "img/EntranceOpen.png";
	}
}


//  *  *  *  * INSIDE: ENTRY WAY  *  *  *  *  *  *  *
var entryWay = {
	room: "Entry Way",
	description: "As you enter, you are greeted by the light of two torches at the far end of the room and a door between them. It's cool inside and the floor is littered with small bones; probably from small rodents." ,
	start: function() {
		headingThree.innerHTML = entryWay.room;
		messageOne.innerHTML = entryWay.description;
		messageTwo.style.display = "none";
		buttonOne.innerHTML = "Congratulations";
		buttonOne.onclick = congratulate;
		buttonTwo.style.display = "none";
	}
}



//  *  *  *  *  STARTER FUNCTION  *  *  *  *  *  *  *
function progress() {
	if(entrance.switches[0] != true) {
		image.style.display = "block"
		headingThree.innerHTML = entrance.room;
		messageOne.innerHTML = entrance.description;
		buttonOne.innerHTML = entrance.choices[0];
		buttonOne.onclick = entrance.hitSkull;
	}
}


function flashScreenRed() {
	background.style.backgroundColor = 'rgb(206, 14, 14)';
	setTimeout(function(){background.style.backgroundColor = "black"}, 70);	
}

function flashScreenWhite() {
	background.style.backgroundColor = 'white';
	setTimeout(function(){background.style.backgroundColor = "black"}, 70);	
}

function shakeEnemy() {
	//FINISH THIS FINISH THIS FINISH THIS FINISH THIS FINISH THIS FINISH THIS FINISH THIS FINISH THIS FINISH THIS FINISH THIS FINISH THIS FINISH THIS FINISH THIS 
}


function congratulate() {
	alert("Congratulations on playing entering the dungeon! Also, Thank You SOOOO much for playing what I have so far! Any feedback is appreciated!")
}

