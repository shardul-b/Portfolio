// AOS.init();
const ids=(val)=>{
	let value=document.getElementById(val);
	return value;
};
const classes=(val)=>{
	let values=document.getElementsByClassName(val);
	return values;
};
const creator=(val)=>{
	let created=document.createElement(val);
	return created;
};

// classes('scroll-dot')[0].addEventListener('click',()=>{
// 	classes('tooltip')[0].classList.toggle('hide');
// })


const projects_info={
	confusion:{
		name:'The ConFusion restaurant',
		image:'',
		link:''
	},
	login:{
		name:'Login Page',
		image:'',
	},
	wa:{
		name:'WhatsApp UI Clone',
		status:'In Progress',
		completed:false,
		// description:'A simple WhatsApp UI clone',
		image:'./Images/wa.jpg',
		link:''
	}
}
const projects_creator=()=>{
	for (let i in projects_info){
		const card=creator('div');
		card.classList.add('card');
		// const cardImage=creator('div');
		// cardImage.classList.add('card-image');

		//console.log(projects_info[i]['image'])
		//cardImage.style.backgroundColor='green';
		card.style.background=`url('${projects_info[i]['image']}') no-repeat center`;
		card.style.backgroundSize='cover';
		// card.appendChild(cardImage);
		//Overlay for scroll
		const cardOverlay=creator('div');
		cardOverlay.classList.add('card-overlay');
		const card_head=creator('h3');
		card_head.classList.add('card-head');
		//title
		const title=creator('span');
		title.classList.add('title');
		title.innerHTML=projects_info[i]['name'];
		card_head.appendChild(title);
		//status
		/*const status=creator('span');
		status.classList.add('status');
		if(projects_info[i]['completed']){	
			status.innerHTML=projects_info[i]['status'];
			card_head.appendChild(status);
		}else{
			status.innerHTML=projects_info[i]['status'];
			card_head.appendChild(status);
		}*/
		cardOverlay.appendChild(card_head);
		card.appendChild(cardOverlay);
		classes('project-cards')[0].appendChild(card);
	}
}
const skillsInfo={
	HTML:9,
	CSS:8,
	JavaScript:7,
	PHP:5,
	SQL:6,
	MongoDb:6,
	NodeJS:6,
	React:7,
	Express:6,
	BootStrap:7,
	FireBase:6,
	LESS:4,
	SCSS:4,
	TypeScript:4
}
const skills_creator=()=>{
	for(let j in skillsInfo){
		/*Details div*/
		const skillDetail=creator('div');
		skillDetail.classList.add('skill-detail','flex-space');
		/*Name of skill*/
		const skillName=creator('span');
		skillName.classList.add('skill-name');
		skillName.innerHTML=j;
		skillDetail.appendChild(skillName);
		/*Rating*/
		const skillRating=creator('div');
		skillRating.classList.add('skill-rating','flex');
		const rateObject=creator('div');	
		rateObject.classList.add('rate-object');
		const rateValue=creator('span');
		rateValue.classList.add('rate-value');
		rateValue.style.width=`${skillsInfo[j]*10}%`;
		rateObject.appendChild(rateValue);
		skillRating.appendChild(rateObject)
		skillDetail.appendChild(skillRating);
		classes('skills-box')[0].appendChild(skillDetail);
	}	
	
}
(()=>{
	projects_creator()
	skills_creator();
})();
