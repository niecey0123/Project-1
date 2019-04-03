window.onload = function() {
 	const body = document.body;
 
	let textBlock =document.createElement('div');
	textBlock.className="text-content";
	body.appendChild(textBlock);

	// let dress = document.createElement('div');
	// dress.className= "item-1";
	// body.appendChild(dress);


	let myHair = ['hair-1','hair-2','hair-3']
	const hairDiv = document.querySelectorAll('.hStyle')
	const create_hair_style =()=>{
		for (let x = 0; x < 3; x++) {
		let hair =document.createElement('div');
		hair.className= myHair[x];
		hairDiv[x].appendChild(hair);
		
	  };

	};
	create_hair_style();

	let myTop=['top1','top2','top3']
	const topDivs = document.querySelectorAll('.top');
	const create_top_style = () => {
		for (let y = 0; y < 3; y++) {
			
			let top_layer = document.createElement('div');
			top_layer.className = myTop[y];
			topDivs[y].appendChild(top_layer);


		};
	};

	create_top_style();

 	let myBottom = ['bottom1','bottom2','bottom3'];
 	const midDivs = document.querySelectorAll('.bottom');
 	const create_bottom = ()=>{
 		for (let z = 0; z < 3; z++) {
 			
 			let mid_layer = document.createElement('div');
 			mid_layer.className = myBottom[z];
 			midDivs[z].appendChild(mid_layer);
 		};
	};
	create_bottom();


	let myAccessories = ['thing1','thing2','thing3'];
	const lastDivs = document.querySelectorAll('div');
	const create_accessories = ()=>{
		for (let a = 0; a < 3 ; a++) {
			
			let last_layer = document.createElement('div');
			last_layer.className= myAccessories[a];
			lastDivs[a].appendChild(last_layer);
		};
	};
	create_accessories();


	let addOn = document.createElement('div');
	addOn.className = "mannequin";
	body.appendChild(addOn);
	let top1 = document.querySelector('.top1');
	addOn.addEventListener('click',(e)=>{
				let xPos = e.clientX - (top1.offsetWidth / 2);
				let yPos = e.clientY - (top1.offsetheight / 2) ;

				let translate3dVal = "translate3d(" + xPos + "px," + yPos + "px ,0)"
				top1.style.transform = translate3dVal;
			});

	
	console.log(addOn);

	class avatar {
		constructor(name,top,bottoms,dress,shoes,hat){
			this.name = name;
			this.top = top;
			this.bottoms = bottoms;
			this.dress = dress;
			this.shoes = shoes;
		};
		welcomeGreeting(){
		return `Hi!, I'm ${this.name}. Welcome to my room! I have a date in a few and I need your help. Can you get me ready in time?`;
		};
		compliment1(){
			return `${this.top} top!`
		}

	};

	const dress1 = document.querySelector('.item-1');
	let niecey = new avatar("Niecey","I'm really diggin this","Great","Sexy","Fire","Perfect");
		textBlock.innerHTML = niecey.welcomeGreeting();

		textBlock.addEventListener('click',()=>{
		textBlock.innerHTML = niecey.compliment1();

		dress1.addEventListener('click',()=>{
		dress1.classList.toggle('paused');
		});
		setTimeout(()=>{
			// textBlock.innerHTML = niecey.compliment1();
			// body.removeChild(textBlock);
			
		},2000);
		
	});
};




