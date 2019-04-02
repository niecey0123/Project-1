window.onload = function() {
 	const body = document.body;
 
	let textBlock =document.createElement('div');
	textBlock.className="text-content";
	body.appendChild(textBlock);

	let dress = document.createElement('div');
	dress.className= "item-1";
	body.appendChild(dress);

	let myHair = ['hair-1','hair-2','hair-3']
	const create_hair_style =()=>{
		for (let x = 0; x < 3; x++) {
		let hair =document.createElement('div');
		hair.className= myHair[x];
		body.appendChild(hair);
		
	  };

	};
	create_hair_style();

	const section1 = document.querySelector('#h1');
	let style1 = document.querySelector('.hair-1');
	section1.appendChild(style1);

	const section2 = document.querySelector('#h2');
	let style2 = document.querySelector('.hair-2');
	section2.appendChild(style2);

	const section3 = document.querySelector('#h3');
	let style3 = document.querySelector('.hair-3');
	section3.appendChild(style3);

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

	// const topSection1 = document.querySelector('#t1');
	// let crop1 = document.querySelector('.top1');
	// let crop1 = document.createElement('div');
	// crop1.className = 'top1'
	// topSection1.appendChild(crop1);

	// const top_section2 = document.querySelector('#t2');
	// let crop2 = document.querySelector('.top2');
	// top_section2.appendChild(crop2);

	// const top_section3 = document.querySelector('#t3');
	// let crop3 = document.querySelector('.top3');
	// top_section3.appendChild(crop3);

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




