export function hasClass(obj,cls){
    let result = obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)')); 
    return result==null?false:true;
}

export function addClass(obj,cls){
    if (!hasClass(obj, cls)) obj.className += " " + cls; 
}

export function removeClass(obj,cls){
    if (hasClass(obj, cls)) {  
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
        obj.className = obj.className.replace(reg, '');  
    } 
}

export function getCookie(name){
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg))
		return unescape(arr[2]);
	else
		return null;
}

export function setCookie(name,value,expire){
	var exp = new Date();
	exp.setTime(exp.getTime() + expire*24*60*60*1000);
	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();

}

export function delCookie(name){
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval=getCookie(name);
	if(cval!=null)
	document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}