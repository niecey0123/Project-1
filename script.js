// import dragula from 'dragula';

window.onload = function() {


 	const body = document.body;





	let textBlock =document.createElement('div');
	textBlock.className="text-content";
	body.appendChild(textBlock);
	

	let closet = document.createElement('div');
	closet.className = "closet";
	body.appendChild(closet);

    let top = document.createElement('div');
	top.className = "tops";
	closet.appendChild(top);

	for(x=0; x<3;x++) {
    let board = document.createElement('div');
    board.className = "slot top";

    top.appendChild(board);
		};
		
	let bottom = document.createElement('div');
	bottom.className = "bottoms";
	closet.appendChild(bottom);

	for(x=0; x<3;x++) {
    let board2 = document.createElement('div');
    board2.className = "slot bottom";
	bottom.appendChild(board2);
		};

	let accessories = document.createElement('div');
	accessories.className = "accessories";
	closet.appendChild(accessories);


	for(x=0; x<3;x++) {
    let board3 = document.createElement('div');
    board3.className = "slot thing";
	accessories.appendChild(board3);
		};

	let hair_Styles = document.createElement('div');
	hair_Styles.className = "hair";
	closet.appendChild(hair_Styles);

	for(x=0; x<3;x++) {
    let board4 = document.createElement('div');
    board4.className = "slot hStyle";
	hair_Styles.appendChild(board4);
		};

	let closet_Title = document.createElement('div');
	closet_Title.className = "title";
	closet.appendChild(closet_Title);

	let closet_Title2 = document.createElement('div');
	closet_Title2.id = "title-txt";
	closet_Title.appendChild(closet_Title2);
	
	class avatar {
		constructor(name,top,bottoms,accessory,hair){
			this.name = name;
			this.top = top;
			this.bottoms = bottoms;
			this.accessory = accessory;
			this.hair = hair;
			
		};
		welcomeGreeting(){
		return `Hi!, I'm ${this.name}. Welcome to my room! I have a date in a few and I need your help. Can you get me ready in time?`;
		};
		compliment1(){
			return `I love this ${this.top} top!`
		}
		compliment2(){
			return `I look good in this ${this.bottoms} bottoms!`
		}
		compliment3(){
			return `This ${this.hair} is sooo me!`
		}
		compliment4(){
			return `This ${this.accessory} is Iconic`
		}
		mission(){
			return `I need to find an outfit that would look great for my lunch date! You have 30sec to find a ${this.top} top, 
			some ${this.bottoms} bottoms, and my cool ${this.accessory}.`
		}

	};


	let niecey = new avatar("Niecey","Red","Dark Demin","Shades","Blonde");
	let niecey2 = new avatar("Niecey","White","Cool Grey","Necklace","Black");
	let niecey3 = new avatar("Niecey","Black","Demin Skirt","Hat","Red");



		textBlock.innerHTML = niecey.welcomeGreeting();
		setTimeout(()=>{textBlock.innerHTML = niecey.mission()},4000);
		setTimeout(()=>{countdown()},6000);
		setTimeout(()=>{textBlock.style.display = "none"},10000);

	let myHair = ['hair-1','hair-2','hair-3'];
	let headTarget = document.querySelector('#head-point');
	const hairDiv = document.querySelectorAll('.hStyle')
	const create_hair_style =()=>{
				for (let x = 0; x < 3; x++) {
				let hair =document.createElement('div');
				hair.className= myHair[x];
				hairDiv[x].appendChild(hair);

				hairDiv[x].addEventListener('click',(evnt)=>{
				evnt.target.style.transform = "scale(1.1)"
				if (evnt.target === hair1) {
					textBlock.innerHTML = niecey.compliment3();
					textBlock.style.display = "block";
					headTarget.style.backgroundImage = "url(images/hairstyle1.png)";
					headTarget.style.backgroundRepeat = "no-repeat";
					headTarget.style.backgroundSize = "cover";
					headTarget.style.backgroundSize = "200px 200px"
					headTarget.style.backgroundPosition = "top center";
				
				}
				else if (evnt.target === hair2) {
					textBlock.innerHTML = niecey3.compliment3();
					headTarget.style.backgroundImage = " url(images/short-brunnette.png)";
					headTarget.style.backgroundRepeat = "no-repeat";
					headTarget.style.marginLeft = "28px";
					headTarget.style.backgroundSize = "cover";
					headTarget.style.backgroundSize = "145px 100px";
					headTarget.style.backgroundPosition = "center center";
				}
				else{
					textBlock.innerHTML = niecey2.compliment3();
					headTarget.style.backgroundImage = "url(images/black-long.png)";
					headTarget.style.backgroundRepeat = "no-repeat";
					headTarget.style.backgroundSize = "cover"
					headTarget.style.marginLeft = "25px";
					headTarget.style.marginTop = "20px";
					headTarget.style.backgroundSize = "120px 220px"
					headTarget.style.backgroundPosition = "top center";
				}
	 		});
		
	  	};

	};
	create_hair_style();


	let hair1 = document.querySelector('.hair-1')
	hair1.className="hair-1 hr";


	let hair2 = document.querySelector('.hair-2')
	hair2.className="hair-2 hr";
	

	let hair3 = document.querySelector('.hair-3')
	hair3.className="hair-3 hr";

	let myTop=['top1','top2','top3']
	let topTarget = document.querySelector('#top-point');
	const topDivs = document.querySelectorAll('.top');
	const create_top_style = () => {
		for (let y = 0; y < 3; y++) {
			
			let top_layer = document.createElement('div');
			top_layer.className = myTop[y];
			topDivs[y].appendChild(top_layer);

			topDivs[y].addEventListener('click',(evnt)=>{
				evnt.target.style.transform = "scale(1.1)"

				if (evnt.target === top1) {
					textBlock.innerHTML = niecey.compliment1();
					textBlock.style.display = "block";
					topTarget.style.backgroundImage = "url('Images/crop1.png')";
					topTarget.style.backgroundRepeat = "no-repeat";
					topTarget.style.backgroundSize = "cover"
					topTarget.style.backgroundPosition = "center center";
					// topTarget.style.backgroundImage = "Images/crop1.png"
				}
				else if (evnt.target === top2) {
					textBlock.innerHTML = niecey2.compliment1();
					topTarget.style.backgroundImage = " url('Images/crop2.png')";
					topTarget.style.backgroundRepeat = "no-repeat";
					topTarget.style.backgroundSize = "cover"
					topTarget.style.backgroundSize = "175px 120px"
					topTarget.style.backgroundPosition = "top center";
				}
				else{
					textBlock.innerHTML = niecey3.compliment1();
					topTarget.style.backgroundImage = " url('Images/crop3.png')";
					topTarget.style.backgroundRepeat = "no-repeat";
					topTarget.style.backgroundSize = "cover"
					topTarget.style.backgroundSize = "250px 300px"
					topTarget.style.backgroundPosition = "top center";
				}
	
	 		});
		};
	};

	create_top_style();

	let top1 = document.querySelector('.top1')
	top1.className="top1 ts";


	let top2 = document.querySelector('.top2')
	top2.className="top2 ts";
	

	let top3 = document.querySelector('.top3')
	top3.className="top3 ts";


 	let myBottom = ['bottom1','bottom2','bottom3'];
 	let bottomTarget = document.querySelector('#bottom-point');
 	const midDivs = document.querySelectorAll('.bottom');
 	const create_bottom = ()=>{
 		for (let z = 0; z < 3; z++) {
 			
 			let mid_layer = document.createElement('div');
 			mid_layer.className = myBottom[z];
 			midDivs[z].appendChild(mid_layer);

 			midDivs[z].addEventListener('click',(evnt)=>{
			evnt.target.style.transform = "scale(1.1)"

					if (evnt.target === bottom1) {
					textBlock.innerHTML = niecey.compliment2();
					textBlock.style.display = "block";
					bottomTarget.style.backgroundImage = "url('Images/bottom1.png')";
					bottomTarget.style.backgroundRepeat = "no-repeat";
					bottomTarget.style.backgroundSize = "cover"
					bottomTarget.style.backgroundPosition = "center center";
				}
				else if (evnt.target === bottom2) {
					textBlock.innerHTML = niecey2.compliment2();
					bottomTarget.style.backgroundImage = " url('Images/bottom2.png')";
					bottomTarget.style.backgroundRepeat = "no-repeat";
					bottomTarget.style.backgroundSize = "cover"
					bottomTarget.style.backgroundSize = "175px 120px"
					bottomTarget.style.backgroundPosition = "top center";
				}
				else{
					textBlock.innerHTML = niecey3.compliment2();
					bottomTarget.style.backgroundImage = " url('Images/bottom3.png')";
					bottomTarget.style.backgroundRepeat = "no-repeat";
					bottomTarget.style.backgroundSize = "cover"
					bottomTarget.style.backgroundSize = "160px 170px"
					bottomTarget.style.backgroundPosition = "top center";
				}
	
	
	 		});
 		};
	};
	create_bottom();

	let bottom1 = document.querySelector('.bottom1')
	bottom1.className="bottom1 bs";


	let bottom2 = document.querySelector('.bottom2')
	bottom2.className="bottom2 bs";
	

	let bottom3 = document.querySelector('.bottom3')
	bottom3.className="bottom3 bs";

	let myAccessories = ['thing1','thing2','thing3'];
	let midTarget = document.querySelector('#mid-point');
	let neckTarget = document.querySelector('#neck');
	const lastDivs = document.querySelectorAll('.thing');
	const create_accessories = ()=>{
		for (let a = 0; a < 3 ; a++) {
			
				let last_layer = document.createElement('div');
				last_layer.className= myAccessories[a];
				lastDivs[a].appendChild(last_layer);

				lastDivs[a].addEventListener('click',(evnt)=>{
				evnt.target.style.transform = "scale(1.1)"
					if (evnt.target === thing1) {
					textBlock.innerHTML = niecey3.compliment4();
					textBlock.style.display = "block";
					midTarget.style.backgroundImage = "url('Images/hat.png')";
					midTarget.style.marginBottom = "50px";
					midTarget.style.backgroundRepeat = "no-repeat";
					midTarget.style.marginLeft = "8px";
					midTarget.style.backgroundSize = "100px 100px"
					midTarget.style.backgroundSize = "cover"
					midTarget.style.backgroundPosition = "top center";
				}
				else if (evnt.target === thing2) {
					textBlock.innerHTML = niecey.compliment4();
					midTarget.style.backgroundImage = " url('Images/glasses.png')";
					midTarget.style.backgroundRepeat = "no-repeat";
					midTarget.style.backgroundSize = "cover"
					midTarget.style.backgroundSize = "70px 50px"
					midTarget.style.marginTop = "30px";
					midTarget.style.backgroundPosition = "center center";
				}
				else if (evnt.target === thing3){
					textBlock.innerHTML = niecey2.compliment4();
					neckTarget.style.backgroundImage = " url('Images/necklace.png')";
					neckTarget.style.backgroundRepeat = "no-repeat";
					neckTarget.style.backgroundSize = "cover"
					neckTarget.style.backgroundSize = "70px 70px"
					neckTarget.style.backgroundPosition = "top center";
				}
	
	 		});
		};
	};
	create_accessories();

	let thing1 = document.querySelector('.thing1')
	thing1.className="thing1 ts";


	let thing2 = document.querySelector('.thing2')
	thing2.className="thing2 ts";
	

	let thing3 = document.querySelector('.thing3')
	thing3.className="thing3 ts";

	let countdown = ()=>{
		let sec = 30;
		let time = setInterval(()=>{
			document.getElementById('timer').innerText ='00:'+ sec;
			sec--;
			if (sec < 0) {
				clearInterval(time);
				document.getElementById('timer').innerText = 'Ready!';
				document.getElementById('timer').style.backgroundColor = "#FDFF47";
			};
		},1000);
	}
	

	// console.log(`top:` + top1.clientTop + "px" + "border");
	// console.log(`left:` + top1.offsetLeft + "px" + "position and margin of element");
	// console.log(`border:` + top1.offsetHeight / 2 + "px");
	// console.log(top1.offsetWidth / 2 + "px");
	// class avatar {
	// 	constructor(name,top,bottoms,accessory){
	// 		this.name = name;
	// 		this.top = top;
	// 		this.bottoms = bottoms;
	// 		this.accessory = accessory;
			
	// 	};
	// 	welcomeGreeting(){
	// 	return `Hi!, I'm ${this.name}. Welcome to my room! I have a date in a few and I need your help. Can you get me ready in time?`;
	// 	};
	// 	compliment1(){
	// 		return `${this.top} top!`
	// 	}
	// 	mission(){
	// 		return `I need to find an outfit that would look great for my lunch date! You have 30sec to find a ${this.top} top, 
	// 		some ${this.bottoms} bottoms, and my cool ${this.accessory}.`
	// 	}

	// };


	// let niecey = new avatar("Niecey","Black","Dark Demin","Shades",);
	// 	textBlock.innerHTML = niecey.welcomeGreeting();
	// 	setTimeout(()=>{textBlock.innerHTML = niecey.mission()},4000);
	// 	setTimeout(()=>{countdown()},6000);
	// 	setTimeout(()=>{textBlock.style.display = "none"},10000);
		
};




