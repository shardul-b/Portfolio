
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
	crl:{
		name:'CRL Course Website UI',
		image:'./Images/CRL.png',
		link:'https://github.com/shardul-b/CRL',
		completed:true
	},
	confusion:{
		name:'The ConFusion restaurant',
		image:'./Images/ConFusion.png',
		link:'',
		completed:false
	},
	login:{
		name:'Login Page',
		image:'./Images/login.jpg',
		link:'https://github.com/shardul-b/Login-Page',
		completed:true
	},
	wa:{
		name:'WhatsApp UI Clone',
		completed:false,
		image:'./Images/wa.jpg',
		link:'https://code.sololearn.com/W657V97Gyhbz'
	}
}
const projects_creator=()=>{
	for (let i in projects_info){
		const card=creator('div');
		card.classList.add('card');
		card.setAttribute('data-aos','fade-down')
		card.style.background=`url('${projects_info[i]['image']}') no-repeat center`;
		card.style.backgroundSize='cover';
		//Overlay
		const cardOverlay=creator('div');
		cardOverlay.classList.add('card-overlay');
		const card_head=creator('h3');
		card_head.classList.add('card-head');
		//title
		const title=creator('span');
		const link=creator('a');
		link.classList.add('project-link');
		link.setAttribute('href',projects_info[i]['link']);
		link.setAttribute('target','_blank');
		title.classList.add('title');
		title.innerHTML=projects_info[i]['name'];
		link.appendChild(title);
		card_head.appendChild(link);
		cardOverlay.appendChild(card_head);
		card.appendChild(cardOverlay);
		classes('project-cards')[0].appendChild(card);
	}
}
const skillsInfo={
	HTML:9.2,
	CSS:9,
	JavaScript:8,
	PHP:5,
	SQL:6,
	MongoDb:6,
	NodeJS:6,
	React:7,
	ExpressJS:6,
	BootStrap:7,
	FireBase:6,
	LESS:4,
	SASS:4,
	TypeScript:4,
	RegEx:6,
	Git:5,
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
		rateValue.setAttribute('title',rateValue.style.width);
		rateObject.appendChild(rateValue);
		skillRating.appendChild(rateObject)
		skillDetail.appendChild(skillRating);
		classes('skills-box')[0].appendChild(skillDetail);
	}	
	
};
const scroller={
	'0':'top',
	'1':'profile',
	'2':'career',
	'3':'skills',
	'4':'projects',
	'5':'footer'
};
//IIFE for creating projects section,skills section and scroll logic
(()=>{
	projects_creator()
	skills_creator();
	AOS.init();
	scroll();
})();
//For Scrolling via dots
function scroll(){
	for(let i in scroller){
		classes('scroll-dot')[i].addEventListener('click',()=>{
			ids(scroller[i]).scrollIntoView();q
		})		
	}
}

