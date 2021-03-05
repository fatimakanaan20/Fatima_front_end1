  
let mainColors = localStorage.getItem ("color_option");
if(mainColors !== null) {
	//console.log ("local storage is not empty");
	 //console.log(localStorage.getItem ("color_option"));
	 document.documentElement.style.setProperty ('--main-color',localStorage.getItem ("color_option"));
	 document.querySelectorAll(".colors-list li").forEach (element => {
	 	element.classList.remove("active");
	 	if (element.dataset.color === mainColors){
	 		element.classList.add("active");

	 	}


	 });
	 	

let backgroundOption = true;
let backgroundInterval;
let backgroundLocalItem = localStorage.getItem("background_option");
if(backgroundLocalItem !== null){
	
	
	if(backgroundLocalItem === 'true'){
		backgroundOption = true
	}
	else {
		backgroundOption= false;
	}
	document.querySelectorAll (".random-backgrounds span").forEach(element =>{
		element.classList.remove("active");

	});
	if (backgroundLocalItem === 'true') {
		document.querySelector(".random-backgrounds .yes").classList.add("active");

	} else {
		document.querySelector(".random-backgrounds .no").classList.add("active");

	}
}





document.querySelector(".toggle-settings .fa-star").onclick=function () {
	this.classList.toggle("fa-spin");
	document.querySelector(".settings-box").classList.toggle("open");
}
const colorsLi= document.querySelectorAll(".colors-list li");
colorsLi.forEach ( li => {
	li.addEventListener("click", (e) => {
		
		document.documentElement.style.setProperty('--main-color',e.target.dataset.color);

	
});
});




const randomBackEl = document.querySelectorAll(".random-backgrounds span");
 randomBackEl.forEach(span => {
	span.addEventListener("click",(e) => {


	
	e.target.parentElement.querySelectorAll(".active").forEach(element =>
	{
		element.classList.remove("active");


	});
	e.target.classList.add("active");
	if(e.target.dataset.background ==='yes'){
		backgroundOption = true;
		randomizeImgs ();
		localStorage.setItem("background_option",true);
	} else{
		backgroundOption = false;
		clearInterval(backgroundInterval);
		localStorage.setItem("background_option",false);
	}
	});



	});

let landingPage = document.querySelector(".landing-page");
let imgsArray = ["01.jpg" , "02.jpg" , "03.jpg" , "04.jpg ", "05.jpg"] ;


function randomizeImgs () {
	if (backgroundOption===true){
		backgroundInterval=setInterval(() => {
	let randomNumber=Math.floor(Math.random()* imgsArray.length);
	landingPage.style.backgroundImage = 

	  'url("imgs/'+imgsArray[randomNumber]+' ")';

},5000);



	}

}
 randomizeImgs ();
 }

 let ourSkills = document.querySelector(".skills");
 window.onscroll = function (){
 	let skillsOffsetTop = ourSkills.offsetTop;
 	let skillsOuterHeight = ourSkills.offsetHeight;
 	let windowHeight = this.innerHeight;
 	let windowScrollTop = this.pageYOffset;
 	
 	
 	if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
 		
 		let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
 		allSkills.forEach(skill =>{
 			skill.style.width = skill.dataset.progress;
 		});
 	}

 };

 let ourGallery = document.querySelectorAll(".gallery img");
 ourGallery.forEach(img => {
 	img.addEventListener('click', (e) => {
 		let overlay = document.createElement("div");
 	     overlay.className = 'popup-overlay';
 		document.body.appendChild(overlay);
 		let popupBox = document.createElement("div");
 		popupBox.className ='popup-box';
 		if(img.alt !== null){
 			let imgHeading = document.createElement("h3");
 			let imgText =document.createTextNode(img.alt);
 			imgHeading.appendChild(imgText);
 			popupBox.appendChild(imgHeading);		
 		}
 		let popupImage = document.createElement("img");
 		console.log(img.src);
 		popupImage.src = img.src;
 		popupBox.appendChild(popupImage);
 		document.body.appendChild(popupBox);
 		let closeButton = document.createElement("span");
 		let closeButtonText = document.createTextNode("X");
 		closeButton.appendChild(closeButtonText);
 		closeButton.className = 'close-button';
 		popupBox.appendChild(closeButton);

 		
 	});

 });




 document.addEventListener("click", function (e){
 	if(e.target.className =='close-button'){
 	e.target.parentNode.remove();
 	document.querySelector(".popup-overlay").remove();
 }
 });