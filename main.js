let score=0;
let quest;
let numb=1;
let img=document.getElementsByTagName("img");
let fruit = ["apple","orange","mango","kiwi","banana","strawberry","grape","apricots","pineapple"];
let animals= ['panda','tiger','bird','koala','sheep','dog','deer','cow','giraffe','zebra','pig','elephant','kangaroo'];
let city=['paris','london','italy','yerevan','moscow','singapore','dubai']
let ran=[0,1,2,3];
let res=[];

//sa naxnakan sksvum e fruit-ov
for(i=0;i<fruit.length;i++){res.push(fruit[i])}
quent.innerHTML=res.length;


//sa optioni hamar e
function myFunction(){
	res.splice(0, res.length); //datarkum e zangvacy
	let x = document.getElementById("mySelect");
  	let n = x.selectedIndex;
  	if(x.options[n].text=="Fruits"){
  		for(i=0;i<fruit.length;i++){res.push(fruit[i])}

  			for(i=0;i<img.length;i++){
		 	img[i].style.background="none";
		 	img[i].setAttribute("src","img/"+res[i]+".jpg");
		 	img[i].setAttribute("class",res[i]);
		 }

		if(numb<res.length){
			ques.innerHTML=res[ran[0]];
			num.innerHTML=numb
		}

  	} else if(x.options[n].text=="Animals"){
  		for(i=0;i<animals.length;i++){res.push(animals[i])}

  			for(i=0;i<img.length;i++){
		 	img[i].style.background="none";
		 	img[i].setAttribute("src","img/"+res[i]+".jpg");
		 	img[i].setAttribute("class",res[i]);
		 }

		if(numb<res.length){
			ques.innerHTML=res[ran[0]];
			num.innerHTML=numb
		}

  	} 	else if(x.options[n].text=="Cities"){
  		for(i=0;i<city.length;i++){res.push(city[i])}

  			for(i=0;i<img.length;i++){
		 	img[i].style.background="none";
		 	img[i].setAttribute("src","img/"+res[i]+".jpg");
		 	img[i].setAttribute("class",res[i]);
		 }

		if(numb<res.length){
			ques.innerHTML=res[ran[0]];
			num.innerHTML=numb
		}
  	} 	
  	//srancov zroacnum enq hashivy optiony poxeluc heto
  	numb=1;
	num.innerHTML=numb
	score=0;
	scr.innerHTML=score;
	quent.innerHTML=res.length;	
}


function f(elem) {
	//nshum enq vor patahakan nkarner ev barer dni kamputory
	res.sort(function(a,b){return 0.3-Math.random()})
	ran.sort(function(a,b){return 0.3-Math.random()})

	let question = ques.innerHTML; //sa harci anunn e
	if(question == elem.className){ //sa chisht tarberaky
		scr.innerHTML=++score;
		elem.style.background="green";
		for(i=0;i<img.length;i++){ //sa animaciayi hamar e
			img[i].style.opacity=0;
		}
		elem.style.opacity=1;
	} else {
		for(i=0;i<img.length;i++){
			img[i].style.opacity=0;
		}
		elem.style.background="red";
		elem.style.opacity=1;
		setTimeout(function(){elem.style.transform="rotate(10deg)"},100)
		setTimeout(function(){elem.style.transform="rotate(-10deg)"},200)
		setTimeout(function(){elem.style.transform="rotate(8deg)"},300)
		setTimeout(function(){elem.style.transform="rotate(-8deg)"},400)
		setTimeout(function(){elem.style.transform="rotate(6deg)"},500)
		setTimeout(function(){elem.style.transform="rotate(-6deg)"},600)
		setTimeout(function(){elem.style.transform="rotate(3deg)"},700)
		setTimeout(function(){elem.style.transform="rotate(-3deg)"},800)
		setTimeout(function(){elem.style.transform="rotate(0deg)"},900)
	}

	++numb;
	function k(){ //finish
		 for(i=0;i<img.length;i++){ //sa amen angam tarmacnum e nkarneri canky
		 	img[i].style.background="none";
		 	img[i].setAttribute("src","img/"+res[i]+".jpg");
		 	img[i].setAttribute("class",res[i]);
		 	img[i].style.opacity=1;
		 }

		if(numb<res.length+1){ //sa harcery qanaky
			ques.innerHTML=res[ran[0]];
			num.innerHTML=numb
		}

		if(numb==res.length+1){ //sa avartn e
			ques.innerHTML=" ";
			neww.style.display="block";
			bord.style.filter="brightness(20%)";
				for(i=0;i<img.length;i++){
					img[i].style.opacity=1;
				}
			if(score==res.length){
				txt.innerHTML="Շնորհավորում ենք դուք հաղթեցիք";
			} else if(score==res.length-1){
				txt.innerHTML="Դուք գրեթե հաղթեցիք"
			} else if(score>=res.length/2){
				txt.innerHTML="Դուք հարցերից կեսին ճիշտ պատասքանեցիք"
				txt.style.background="red";
			} else {
				txt.innerHTML="Փորձեք լինել ավելի ուշադրի";
				txt.style.background="red";
			}
		}
	} 
	setTimeout(k,1000);
}

function replay(){  //noric skselu buttoni functiony
	numb=1;
	num.innerHTML=numb
	score=0;
	scr.innerHTML=score;
	ques.innerHTML=res[ran[0]];
	setTimeout(f,10);
	neww.style.display="none";
	bord.style.filter="brightness(100%)";
}