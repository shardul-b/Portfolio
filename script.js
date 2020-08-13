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

const projects_info={
	wa:{
		name:'WhatsApp UI Clone',
		inprogress:true,
		description:'A simple WhatsApp UI clone',
		image:'',
		link:''
	},
	/*soon:{
		name:'Coming Soon',
		status:'',
		description:'',
		inprogress:false,
		image:'',
		link:''
	}*/
}
const projects_creator=()=>{
	for (let i in projects_info){
		const card=creator('div');
		card.classList.add('card');
		//Overlay for scroll
		const cardOverlay=creator('div');
		cardOverlay.classList.add('card-overlay');
		const card_head=creator('h3');
		card_head.classList.add('card-head','flex-space');
		//title
		const title=creator('span');
		title.classList.add('title');
		title.innerHTML=projects_info[i]['name'];
		card_head.appendChild(title);
		//status
		const status=creator('span');
		status.classList.add('status');
		if(projects_info[i]['inprogress']){	
			status.innerHTML='In progress';
			card_head.appendChild(status);
		}else{
			status.innerHTML='Completed';
			card_head.appendChild(status);
		}
		cardOverlay.appendChild(card_head);
		//Description
		const card_desc=creator('span');
		card_desc.classList.add('card-desc');
		card_desc.innerHTML=projects_info[i]['description'];
		cardOverlay.appendChild(card_desc);
		//Button
		const link=creator('a');
		link.classList.add('view');
		link.setAttribute('href',projects_info[i]['link']);
		link.innerHTML='View Project';
		cardOverlay.appendChild(link);
		card.appendChild(cardOverlay);
		//cardImage
		const cardImage=creator('div');
		cardImage.classList.add('card-image');
		cardImage.style.background=projects_info[i]['image'];
		card.appendChild(cardImage);
		classes('project-cards')[0].appendChild(card);
	}
}
(()=>{
	projects_creator();
})();