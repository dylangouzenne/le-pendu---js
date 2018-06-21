
var tableau = ['manger', 'coder', 'table', 'clavier', 'souris', 'mot', 'pupitre', 'pause', 'fegnasse', 'cookie', 'action', 'favoris'];
var numRandom = Math.floor(Math.random() * tableau.length);
var motRandom = tableau[numRandom];
console.log(motRandom);
var originalString = tableau[numRandom];
var splitString = originalString.split("");
var mot_mystere = [];
var lettrechoisi =[];
var init_lettrechoisi = 0;
var nb_eror = 0;
var lettre_eror = [];



for(var i=0 ; i<splitString.length ; i++){
	mot_mystere.push('*');
};

console.log(splitString);
console.log(mot_mystere);

$("#display").html("Devinez le mot qui est cacher : "+ mot_mystere);


$("#A").click(function (){
	lettrechoisi =[];
	lettrechoisi.push("a");
	console.log(lettrechoisi);
});
$("#B").click(function(){
	lettrechoisi =[];
	lettrechoisi.push("b");
	console.log(lettrechoisi);
});
$("#C").click(function(){
	lettrechoisi =[];
	lettrechoisi.push("c");
	console.log(lettrechoisi);
});
$("#D").click(function (){
	lettrechoisi =[];
	lettrechoisi.push("d");
	console.log(lettrechoisi);
});
$("#E").click(function (){
	lettrechoisi =[];
	lettrechoisi.push("e");
	console.log(lettrechoisi);
});
$("#F").click(function (){
	lettrechoisi =[];
	lettrechoisi.push("f");
	console.log(lettrechoisi);
});
$("#G").click(function (){
	lettrechoisi =[];
	lettrechoisi.push("g");
	console.log(lettrechoisi);
});
$("#H").click(function (){
	lettrechoisi =[];
	lettrechoisi.push("h");
	console.log(lettrechoisi);
});
$("#I").click(function (){
	lettrechoisi =[];
	lettrechoisi.push("i");
	console.log(lettrechoisi);
});
$("#J").click(function (){
	lettrechoisi =[];
	lettrechoisi.push("j");
	console.log(lettrechoisi);
});
$("#K").click(function (){
	lettrechoisi =[];
	lettrechoisi.push("k");
	console.log(lettrechoisi);
});
$("#L").click(function (){
	lettrechoisi =[];
	lettrechoisi.push("l");
	console.log(lettrechoisi);
});
$("#M").click(function (){
	lettrechoisi =[];
	lettrechoisi.push("m");
	console.log(lettrechoisi);
});
$("#N").click(function (){
	lettrechoisi =[];
	lettrechoisi.push("n");
	console.log(lettrechoisi);
});
$("#O").click(function (){
	lettrechoisi =[];
	lettrechoisi.push("o");
	console.log(lettrechoisi);
});
$("#P").click(function (){
	lettrechoisi =[];
	lettrechoisi.push("p");
	console.log(lettrechoisi);
});
$("#Q").click(function (){
	lettrechoisi =[];
	lettrechoisi.push("q");
	console.log(lettrechoisi);
});
$("#R").click(function (){
	lettrechoisi =[];
	lettrechoisi.push("r");
	console.log(lettrechoisi);
});
$("#S").click(function (){
	lettrechoisi =[];
	lettrechoisi.push("s");
	console.log(lettrechoisi);
});
$("#T").click(function (){
	lettrechoisi =[];
	lettrechoisi.push("t");
	console.log(lettrechoisi);
});
$("#U").click(function (){
	lettrechoisi =[];
	lettrechoisi.push("u");
	console.log(lettrechoisi);
});
$("#V").click(function (){
	lettrechoisi =[];
	lettrechoisi.push("v");
	console.log(lettrechoisi);
});
$("#W").click(function (){
	lettrechoisi =[];
	lettrechoisi.push("w");
	console.log(lettrechoisi);
});
$("#X").click(function (){
	lettrechoisi =[];
	lettrechoisi.push("x");
	console.log(lettrechoisi);
});
$("#Y").click(function (){
	lettrechoisi =[];
	lettrechoisi.push("y");
	console.log(lettrechoisi);
});
$("#Z").click(function (){
	lettrechoisi =[];
	lettrechoisi.push("z");
	console.log(lettrechoisi);
});

$("#boutons").click(function(){
	
	for(var i = 0; i < splitString.length; i++){
		
		if(lettrechoisi == splitString[i]){
			mot_mystere[i] = splitString[i] 
			mot_mystere.splice(mot_mystere[i], lettrechoisi);
			$("#display").html("Devinez le mot qui est cacher : "+mot_mystere);
			init_lettrechoisi = init_lettrechoisi +100;
		}
		else{
			init_lettrechoisi --;
		}
	}
	
	if(init_lettrechoisi<0){
		alert("cette lettre n'est pas présente dans ce mot...");
	 	nb_eror++;
	 	$("#erreur1").html("vous avez fais "+nb_eror+" erreur");
		lettre_eror.push(lettrechoisi);
		$("#erreur2").html("les lettre suivantes ne sont pas présente dans le mot caché : "+lettre_eror);
	};
	
	init_lettrechoisi = 0;
});