var bmodeling = document.getElementById('dotmodeling');
var tmodeling = document.getElementById('modeling');
var menumodeling = document.getElementById('showmodeling');


var bphotoshop = document.getElementById('dotphotoshop');
var tphotoshop = document.getElementById('photoshop');
var menuphotoshop = document.getElementById('showphotoshop');

var bscenes = document.getElementById('dotscenes');
var tscenes = document.getElementById('scenes');
var menuscenes = document.getElementById('showscenes');

var bprogramming = document.getElementById('dotprogramming');
var tprogramming = document.getElementById('programming');
var menuprogramming = document.getElementById('showprogramming');

var bclose = document.getElementById('closebutton');
var bclose1 = document.getElementById('closebutton1');
var bclose2 = document.getElementById('closebutton2');
var bclose3 = document.getElementById('closebutton3');
var bclose4 = document.getElementById('closebutton4');

var loading = document.getElementById('contenidorcarga');

var contact = document.getElementById('dotcontact');
var contactpop = document.getElementById('contactshow');
var menucontact = document.getElementById('dotgetcontact');


//intentar fer un window.onload per tal que nomes carregar la pagina faci les animacions inleft i inright i evitar bugg
//window.onload = function () {
  //  loading.style.visibility="hidden";
    //loading.style.opacity="0";
    
	//bmodeling.style.animationName = "inleft";
    //bphotoshop.style.animationName = "inleft";
    //bscenes.style.animationName = "inright";
    //bprogramming.style.animationName = "inright";
    //}
setTimeout(function(){ 
	loading.style.visibility="hidden";
    	loading.style.opacity="0";
    
	bmodeling.style.animationName = "inleft";
   	bphotoshop.style.animationName = "inleft";
    	bscenes.style.animationName = "inright";
   	bprogramming.style.animationName = "inright";
    
	 }, 300);

bmodeling.onclick = function () {
	
    menumodeling.style.visibility = "visible";
	menuphotoshop.style.visibility = "hidden";
	menuscenes.style.visibility = "hidden";
	menuprogramming.style.visibility = "hidden";
    
    bmodeling.style.animationName = "inleft";
    bphotoshop.style.animationName = "outleft";
    bscenes.style.animationName = "outright";
    bprogramming.style.animationName = "outright";
    
    tmodeling.style.animationName = "outlefttitlephotoshop";
    tphotoshop.style.animationName = "outlefttitlephotoshop";
    tscenes.style.animationName = "outrighttitlescene";
    tprogramming.style.animationName = "outrighttitle"; 
}
bphotoshop.onclick = function (){
    menuphotoshop.style.visibility = "visible";
	menumodeling.style.visibility = "hidden";
	menuscenes.style.visibility = "hidden";
	menuprogramming.style.visibility = "hidden";
    
    bmodeling.style.animationName = "outleft";
    bphotoshop.style.animationName = "inleft";
    bscenes.style.animationName = "outright";
    bprogramming.style.animationName = "outright";
    
    tmodeling.style.animationName = "outlefttitle";
    tphotoshop.style.animationName = "outlefttitlephotoshop";
    tscenes.style.animationName = "outrighttitlescene";
    tprogramming.style.animationName = "outrighttitle";
	
    
}
bscenes.onclick = function (){
    menuscenes.style.visibility = "visible";
    menumodeling.style.visibility = "hidden";
	menuphotoshop.style.visibility = "hidden";
	menuprogramming.style.visibility = "hidden";
	
    bmodeling.style.animationName = "outleft";
    bphotoshop.style.animationName = "outleft";
    bscenes.style.animationName = "inright";
    bprogramming.style.animationName = "outright";
    
    tmodeling.style.animationName = "outlefttitle";
    tphotoshop.style.animationName = "outlefttitlephotoshop";
    tscenes.style.animationName = "outrighttitlescene";
    tprogramming.style.animationName = "outrighttitle";
    
}
bprogramming.onclick = function (){
    menuprogramming.style.visibility = "visible";
	menumodeling.style.visibility = "hidden";
	menuphotoshop.style.visibility = "hidden";
	menuscenes.style.visibility = "hidden";
     
    bmodeling.style.animationName = "outleft";
    bphotoshop.style.animationName = "outleft";
    bscenes.style.animationName = "outright";
    bprogramming.style.animationName = "inright";
    
    tmodeling.style.animationName = "outlefttitle";
    tphotoshop.style.animationName = "outlefttitlephotoshop";
    tscenes.style.animationName = "outrighttitlescene";
    tprogramming.style.animationName = "outrighttitle";
    
}
bclose.onclick = function () {
	menuprogramming.style.visibility = "hidden";
	menumodeling.style.visibility = "hidden";
	menuphotoshop.style.visibility = "hidden";
	menuscenes.style.visibility = "hidden";
	
	bmodeling.style.animationName = "inleft";
    bphotoshop.style.animationName = "inleft";
    bscenes.style.animationName = "inright";
    bprogramming.style.animationName = "inright";
    
    tmodeling.style.animationName = "inlefttitle";
    tphotoshop.style.animationName = "inlefttitlephotoshop";
    tscenes.style.animationName = "inrighttitlescene";
    tprogramming.style.animationName = "inrighttitle";
}
bclose1.onclick = function () {
	menuprogramming.style.visibility = "hidden";
	menumodeling.style.visibility = "hidden";
	menuphotoshop.style.visibility = "hidden";
	menuscenes.style.visibility = "hidden";
	
	bmodeling.style.animationName = "inleft";
    bphotoshop.style.animationName = "inleft";
    bscenes.style.animationName = "inright";
    bprogramming.style.animationName = "inright";
    
    tmodeling.style.animationName = "inlefttitle";
    tphotoshop.style.animationName = "inlefttitlephotoshop";
    tscenes.style.animationName = "inrighttitlescene";
    tprogramming.style.animationName = "inrighttitle";
}

bclose2.onclick = function () {
	menuprogramming.style.visibility = "hidden";
	menumodeling.style.visibility = "hidden";
	menuphotoshop.style.visibility = "hidden";
	menuscenes.style.visibility = "hidden";
	
	bmodeling.style.animationName = "inleft";
    bphotoshop.style.animationName = "inleft";
    bscenes.style.animationName = "inright";
    bprogramming.style.animationName = "inright";
    
    tmodeling.style.animationName = "inlefttitle";
    tphotoshop.style.animationName = "inlefttitlephotoshop";
    tscenes.style.animationName = "inrighttitlescene";
    tprogramming.style.animationName = "inrighttitle";
}

bclose3.onclick = function () {
	menuprogramming.style.visibility = "hidden";
	menumodeling.style.visibility = "hidden";
	menuphotoshop.style.visibility = "hidden";
	menuscenes.style.visibility = "hidden";
	
	bmodeling.style.animationName = "inleft";
    bphotoshop.style.animationName = "inleft";
    bscenes.style.animationName = "inright";
    bprogramming.style.animationName = "inright";
    
    tmodeling.style.animationName = "inlefttitle";
    tphotoshop.style.animationName = "inlefttitlephotoshop";
    tscenes.style.animationName = "inrighttitlescene";
    tprogramming.style.animationName = "inrighttitle";
}

contact.onmouseover = function (){
    bmodeling.style.opacity = "0.3";
    bscenes.style.opacity = "0.3";
    bphotoshop.style.opacity = "0.3";
    bprogramming.style.opacity = "0.3";
    contactpop.style.opacity = "1";
}
contact.onmouseout = function (){
    bmodeling.style.opacity = "1";
    bscenes.style.opacity = "1";
    bphotoshop.style.opacity = "1";
    bprogramming.style.opacity = "1";
    contactpop.style.opacity = "0";
}
contact.onclick = function () {
    menucontact.style.opacity = "1";
    menucontact.style.zIndex = "6";
}
bclose4.onclick = function () {
    menucontact.style.opacity = "0";
    menucontact.style.zIndex = "0";
}











