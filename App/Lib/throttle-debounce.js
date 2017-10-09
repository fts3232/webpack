export function throttle(delay,action){
	let next = 0;
	return (...args)=>{
		let now = +new Date();
		if(next==0 || next <= now){
			action(...args)
			next = now + delay;
		}
	}
	
}

export function debounce(delay,action){
	let timer = null;
	return (...args)=>{
		if(timer){
			clearTimeout(timer);
		}
		timer = setTimeout(function(){
			action(...args);
		},delay)
	}
}